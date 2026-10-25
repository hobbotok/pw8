export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('.banner h1');
        this.body = page.locator('.article-content p');
        this.commentInput = page.getByRole('textbox', { name: 'Write a comment...' });
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
        this.comments = page.locator('.card .card-text');
    }

    async comment(text) {
        await this.commentInput.fill(text);
        await this.postCommentButton.click();
    }

    commentWithText(text) {
        return this.comments.filter({ hasText: text });
    }
}
