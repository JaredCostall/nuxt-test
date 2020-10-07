<template>
    <div>
        header
        <ul>
            <li v-for="locale in availableLocales" :key="locale">
                <nuxt-link :to="switchLocalePath(locale)">{{
                    locale
                }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales;
        },
    },
};
</script>
