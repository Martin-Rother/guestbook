<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;


class PostTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->artisan('db:seed');
    }

    public function test_entrylist()
    {
        $response = $this->get('/api/posts');

        $response->assertStatus(200)->assertJsonCount(15);
    }

    public function test_new_entry()
    {
        $response = $this->postJson('/api/post/store', ['name' => 'Sally', 'entry' => 'Testentry']);

        $response->assertStatus(200)->assertJson([
            'error' => false,
            'created' => true,
        ]);

        $response = $this->postJson('/api/post/store', ['name' => '<script></script>', 'entry' => 'Testentry']);

        $response->assertStatus(200)->assertJson([
            'error' => true,
            'msg' => 'Invalid name or entry',
        ]);
    }

}
