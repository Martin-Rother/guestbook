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
            <vContainer fluid class="text-center ma-2">
                <vRow>
                    <vCol cols="2"></vCol>
                    <vCol cols="8">
                        <vForm class="mx-2">
                            <vTextField
                                v-model="name"
                                label="Name"
                            ></vTextField>
                        </vForm>
                        <div class="mx-2">
                            <QuillEditor
                                v-model:content="entry"
                                ref="editor"
                                :placeholder="$t('message.placeholder')"
                                :key="$t('message.placeholder')"
                                contentType="html"
                                toolbar="essential"
                                theme="snow"
                            />
                        </div>
                        <vRow>
                            <vCol>
                                <div
                                    class="ma-2 caption text-left font-weight-thin"
                                >
                                    {{ entry.length }} /
                                    {{ entryMaxLength }} Bytes
                                </div>
                            </vCol>
                            <vCol>
                                <div class="text-right ma-2">
                                    <vBtn
                                        @click="send()"
                                        :disabled="entry === '' || name === ''"
                                    >
                                        {{ $t('message.send') }}
                                    </vBtn>
                                </div>
                            </vCol>
                        </vRow>

                        <vPagination
                            v-model="page"
                            :length="Math.ceil(posts.length / 5)"
                        ></vPagination>
                        <div v-if="posts.length !== 0" class="mr-4 mt-2">
                            <vContainer
                                fluid
                                v-for="item in posts.slice(
                                    (page - 1) * 5,
                                    page * 5
                                )"
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
                                        <div
                                            class="mx-2"
                                            v-html="item.entry"
                                        ></div>
                                    </vCol>
                                </vRow>
                            </vContainer>
                        </div>
                    </vCol>
                    <vCol cols="2"></vCol>
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
        entryMaxLength: 4000,
        name: '',
        nameMaxLength: 255,
        posts: [],
        page: 1,
    }),
    mounted() {
        this.refreshEntries()
    },
    methods: {
        send() {
            axios
                .post(import.meta.env.VITE_BACKEND + '/api/post/store', {
                    name: this.name,
                    entry: this.entry,
                })
                .then((response) => {
                    if (response.data.error) {
                        alert(response.data.msg)
                    } else {
                        this.name = ''
                        this.entry = ''
                        this.$refs.editor.setText('')
                    }
                    this.refreshEntries()
                })
        },
        refreshEntries() {
            axios
                .get(import.meta.env.VITE_BACKEND + '/api/posts')
                .then((response) => {
                    this.posts = response.data.reverse()
                })
        },
    },
    components: { QuillEditor, LocaleChangerVue },
    watch: {
        entry: function (newValue, oldValue) {
            if (newValue.length > this.entryMaxLength) {
                this.entry = oldValue
            }
        },
        name: function (newValue, oldValue) {
            if (newValue.length > this.nameMaxLength) {
                this.name = oldValue
            }
        },
    },
}
</script>
