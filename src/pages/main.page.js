const URL = 'https://realworld.qa.guru/';

export class MainPage {
    constructor (page) {
// техническое описание страницы (браузер, элементы)
// описываем браузерные элементы, которые мы будем использовать в тестах;
this.page = page;
this.signupLink = page.getByRole('link', { name: 'Sign up' });
    }

// методы - бизнесовое описание страницы
async open() {
    await this.page.goto(URL);
}
async signUp() {
    await this.signupLink.click();
}
};    