<template>
    <vApp>
        <vAppBar color="teal-darken-4" dark>
            <vAppBarTitle>{{ $t('message.title') }}</vAppBarTitle>
            <template v-slot:append>
                <vBtn
                    flat
                    variant="contained-text"
                    class="mr-2"
                    @click="toggleTheme"
                    >{{ $t('message.toggle_theme') }}</vBtn
                >
                <localeChangerVue></localeChangerVue>
            </template>
        </vAppBar>
        <vMain>
            <vContainer class="text-center ma-2">
                <vRow>
                    <vCol offset-lg="4" lg="8">
                        <vForm class="mx-2">
                            <vTextField
                                v-model="name"
                                label="Name"
                            ></vTextField>
                        </vForm>
                        <div class="mx-2">
                            <QuillEditor
                                v-model:content="entry"
                                :placeholder="$t('message.placeholder')"
                                contentType="html"
                                toolbar="essential"
                                theme="snow"
                            />
                        </div>

                        <div class="text-right ma-2">
                            <vBtn
                                @click="send()"
                                :disabled="entry === '' || name === ''"
                            >
                                {{ $t('message.send') }}
                            </vBtn>
                        </div>

                        <div v-if="posts.length !== 0" class="mr-4 mt-2">
                            <vContainer
                                fluid
                                v-for="item in posts"
                                class="elevation-1 ma-2"
                            >
                                <vRow>
                                    <vCol class="text-left text-subtitle-1">
                                        {{ item.name }}
                                    </vCol>
                                    <vCol>
                                        <div class="text-right text-caption">
                                            {{
                                                $d(
                                                    new Date(item.created_at),
                                                    'short'
                                                )
                                            }}
                                        </div>
                                    </vCol>
                                </vRow>
                                <vRow>
                                    <vCol class="text-left text-body-1">
                                        <div v-html="item.entry"></div>
                                    </vCol>
                                </vRow>
                            </vContainer>
                        </div>
                    </vCol>
                </vRow>
            </vContainer>
        </vMain>
    </vApp>
</template>

<script>
import { useTheme } from 'vuetify'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from 'axios'
import LocaleChangerVue from './components/locale-changer.vue'

export default {
    setup() {
        const theme = useTheme()
        return {
            theme,
            toggleTheme: () =>
                (theme.name.value = theme.current.value.dark
                    ? 'light'
                    : 'dark'),
        }
    },
    data: () => ({
        entry: '',
        name: '',
        posts: [],
    }),
    mounted() {
        this.refreshEntries()
    },
    methods: {
        send() {
            axios
                .post('http://localhost:8000/api/post/store', {
                    name: this.name,
                    entry: this.entry,
                })
                .then(() => {
                    this.refreshEntries()
                })
        },
        refreshEntries() {
            axios.get('http://localhost:8000/api/posts').then((response) => {
                this.posts = response.data.reverse()
            })
        },
    },
    components: { QuillEditor, LocaleChangerVue },
}
</script>
