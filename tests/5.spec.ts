import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import { MainPage } from '../src/pages/main.page';
import { RegisterPage } from '../src/pages/register.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';

test.only('Пользователь может зарегистрироваться, используя email и пароль', async ({ page }) => {
  
  // act подготовка данных
  const user = {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password()
    };  
  
  // arrange предусловие - given
  const main = new MainPage(page);
  const register = new RegisterPage(page);
  const yourFeed = new YourFeedPage(page);

  await main.open();
  await main.signUp();
  await register.register(user);

  // assert - сравниваем фактический и ожидаемый then
  await expect(await yourFeed.getProfileName()).toContainText(user.name);
});


/*
class Burger {
  //поля класса
  brand = 'Sniper';
constructor (price) {
  //свойства
this.name = 'Вкусный бургер';
this.price = price;
}
getInfo() {
    console.log(`Стоимость ${this.price}`)
}
};
//вызов класса
const newObject = new Burger(1000);
console.log(newObject);
newObject.getInfo(200);

// {}
// {} - class (Burger)
// инициализируется поля класса, если они есть
// вызывается конструктор и инициализируются свойства
// привязываются методы и возвращается объект
// объект готов, есть поля, свойства и методы
*/