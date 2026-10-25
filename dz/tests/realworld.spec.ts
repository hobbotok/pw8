import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { ArticlePage } from '../src/pages/article.page';
import { EditorPage } from '../src/pages/editor.page';

// Регистрация здесь не отдельный тест, а подготовка:
// без аккаунта нельзя публиковать статьи и писать комментарии.
async function registerNewUser(page) {
    const user = {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password({ length: 12 }),
    };

    const main = new MainPage(page);
    const register = new RegisterPage(page);

    await main.open();
    await main.signUp();
    await register.register(user);
    await expect(page.getByRole('navigation')).toContainText(user.name);

    return main;
}

test('На главной в Global Feed видны статьи', async ({ page }) => {
    const main = new MainPage(page);

    await main.open();

    await expect(main.globalFeedButton).toBeVisible();
    await expect(main.articleTitles.first()).toBeVisible();
});

test('Пользователь может открыть статью из ленты', async ({ page }) => {
    const main = new MainPage(page);
    const article = new ArticlePage(page);

    await main.open();
    await expect(main.articleTitles.first()).toBeVisible();
    const title = await main.openFirstArticle();

    await expect(page).toHaveURL(/#\/article\//);
    await expect(article.title).toHaveText(title);
    await expect(article.body).toBeVisible();
});

test('Пользователь может отфильтровать ленту по популярному тегу', async ({ page }) => {
    const main = new MainPage(page);

    await main.open();
    await expect(main.popularTags.first()).toBeVisible();
    const tag = await main.filterByFirstTag();

    await expect(main.feedTab(tag)).toBeVisible();
    await expect(main.articlePreviews.first()).toContainText(tag);
});

test('Пользователь может опубликовать новую статью', async ({ page }) => {
    const articleData = {
        title: `Homework ${faker.string.alphanumeric(8)}`,
        description: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        tag: 'pw8',
    };

    const main = await registerNewUser(page);
    const editor = new EditorPage(page);
    const article = new ArticlePage(page);

    await main.openNewArticle();
    await editor.publish(articleData);

    await expect(page).toHaveURL(/#\/article\//);
    await expect(article.title).toHaveText(articleData.title);
    await expect(article.body).toHaveText(articleData.body);
});

test('Пользователь может оставить комментарий к статье', async ({ page }) => {
    const comment = `Comment ${faker.string.alphanumeric(8)}`;

    const main = await registerNewUser(page);
    const article = new ArticlePage(page);

    await main.openGlobalFeed();
    await expect(main.articleTitles.first()).toBeVisible();
    await main.openFirstArticle();
    await article.comment(comment);

    await expect(article.commentWithText(comment)).toBeVisible();
});
