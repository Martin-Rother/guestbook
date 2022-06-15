<template>
    <vApp>
        <vAppBar color="teal-darken-4" dark>
            <vAppBarTitle> Martin's Guestbook </vAppBarTitle>
            <template v-slot:append>
                <vBtn @click="toggleTheme">Toggle Theme</vBtn>
            </template>
        </vAppBar>
        <vMain>
            <vContainer class="ma-2">
                <vRow>
                    <vCol offset-lg="2" lg="8">
                        <vForm class="mx-2">
                            <vTextField
                                v-model="name"
                                label="Name"
                            ></vTextField>
                        </vForm>
                        <div class="mx-2">
                            <QuillEditor
                                v-model:content="content"
                                placeholder="Write something nice :)"
                                contentType="html"
                                toolbar="full"
                                theme="snow"
                            />
                        </div>

                        <div class="text-right ma-2">
                            <vBtn
                                @click="send()"
                                :disabled="content === '' || name === ''"
                            >
                                Send
                            </vBtn>
                        </div>

                        <div v-if="posts.length !== 0" class="ma-2">
                            <vList>
                                <vListItem v-for="item in posts">
                                    <vListItemContent>
                                        <div>User: {{ item.name }}</div>
                                        <div v-html="item.content"></div>
                                    </vListItemContent>
                                </vListItem>
                            </vList>
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
        content: '',
        name: '',
        posts: [],
    }),
    methods: {
        send() {
            this.addPost(this.name, this.content)
        },
        addPost(name, content) {
            this.posts.push({ name: name, content: content })
        },
    },
    components: { QuillEditor },
}
</script>
