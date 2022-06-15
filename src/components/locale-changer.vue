<template>
    <div class="locale-changer">
        <vBtn
            variant="contained-text"
            flat
            @click="$i18n.locale = $i18n.locale == 'de' ? 'en' : 'de'"
            >{{ $i18n.locale == 'de' ? 'en' : 'de' }}</vBtn
        >
    </div>
</template>

<script>
export default {
    name: 'locale-changer',
    data() {
        return { lang: '' }
    },
    mounted() {
        this.lang = this.$i18n.locale
    },
}
</script>
