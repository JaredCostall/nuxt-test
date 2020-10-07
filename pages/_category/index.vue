<template>
    <div>
        <h1>
            {{ category.title }}
        </h1>
        <ul style="background: grey">
            <li v-for="article of articles" :key="article.slug">
                <nuxt-link :to="article.path"
                    ><h2>{{ article.title }}</h2></nuxt-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params, store, app }) {
        const category = await $content(
            app.i18n.locale,
            params.category,
            'index'
        ).fetch();

        const articles = await $content(app.i18n.locale, params.category)
            .only(['title'])
            .where({
                path: {
                    $ne: `/${app.i18n.locale}/${params.category}/index'`,
                },
            })
            .fetch();

        await store.dispatch('i18n/setRouteParams', {
            en: { category: 'news' },
            nl: { category: 'newsx' },
        });

        return {
            category,
            articles,
        };
    },
    head() {
        return {
            title: this.category.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Category description',
                },
            ],
        };
    },
};
</script>
