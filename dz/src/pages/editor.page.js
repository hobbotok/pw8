export class EditorPage {
    constructor(page) {
        this.page = page;
        this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
        this.descriptionInput = page.getByRole('textbox', { name: "What's this article about?" });
        this.bodyInput = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
        this.tagsInput = page.getByRole('textbox', { name: 'Enter tags' });
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
    }

    async publish(article) {
        await this.titleInput.fill(article.title);
        await this.descriptionInput.fill(article.description);
        await this.bodyInput.fill(article.body);
        await this.tagsInput.fill(article.tag);
        await this.tagsInput.press('Enter');
        await this.publishButton.click();
    }
}
