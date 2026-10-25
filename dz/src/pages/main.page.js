const URL = 'https://realworld.qa.guru/';

export class MainPage {
    constructor(page) {
        this.page = page;
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        this.globalFeedButton = page.getByRole('button', { name: 'Global Feed' });
        this.newArticleLink = page.getByRole('link', { name: 'New Article' });
        this.articlePreviews = page.locator('.article-preview');
        this.articleTitles = page.locator('.article-preview h1');
        this.popularTags = page.locator('.sidebar .tag-pill');
        this.feedTabs = page.locator('.feed-toggle');
    }

    async open() {
        await this.page.goto(URL);
    }

    async signUp() {
        await this.signupLink.click();
    }

    async openGlobalFeed() {
        await this.globalFeedButton.click();
    }

    async openNewArticle() {
        await this.newArticleLink.click();
    }

    async openFirstArticle() {
        const title = (await this.articleTitles.first().innerText()).trim();
        await this.articleTitles.first().click();
        return title;
    }

    async filterByFirstTag() {
        const tag = (await this.popularTags.first().innerText()).trim();
        await this.popularTags.first().click();
        return tag;
    }

    feedTab(name) {
        // У вкладки тега в имени есть иконка, поэтому ищем по тексту тега.
        return this.feedTabs.getByRole('button', { name });
    }
}
