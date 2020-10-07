<template>
    <article>
        <nuxt-content :document="article" />
    </article>
</template>

<script>
export default {
    async asyncData({ $content, params, store, app }) {
        const article = await $content(
            app.i18n.locale,
            params.category,
            params.slug
        ).fetch();

        await store.dispatch('i18n/setRouteParams', article.translations);

        return {
            article,
        };
    },
};
</script>
