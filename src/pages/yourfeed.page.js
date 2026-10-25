export class YourFeedPage {
    constructor (page) {
// техническое описание страницы (браузер, элементы)
// описываем браузерные элементы, которые мы будем использовать в тестах;
this.page = page;
this.profileText = page.getByRole('navigation');
}

async getProfileName() {
    return this.profileText;
}
};

// await expect(page.getByRole('navigation')).toContainText(user.name);