import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            title: "Martin's guestbook",
            send: 'Send',
            placeholder: 'Write something nice :)',
            toggle_theme: 'Toggle Theme',
        },
    },
    de: {
        message: {
            title: 'Martin Gästebuch',
            send: 'Senden',
            placeholder: 'Schreibe etwas nettes :)',
            toggle_theme: 'Thema umschalten',
        },
    },
}

const datetimeFormats = {
    en: {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        },
    },
    de: {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
        },
    },
}

const i18n = createI18n({
    locale: 'de', // set locale
    fallbackLocale: 'en',
    messages,
    datetimeFormats,
})

createApp(App).use(VueAxios, axios).use(vuetify).use(i18n).mount('#app')
