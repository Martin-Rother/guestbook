<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_entrylist()
    {
        $response = $this->get('/api/posts');

        $response->assertStatus(200);
    }

    public function test_new_entry()
    {
        //$response = $this->postJson('/api/post/store', ['name' => 'Sally', 'entry' => 'Testentry']);

        //$response->assertStatus(200);
    }

}
