import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';

const URL = 'https://realworld.qa.guru/';

function getEmail(argument) {
let email = faker.internet.email();
return email;
};

const getPassword = (lengthOfPassword) => {
let password = faker.internet.password({length: lengthOfPassword});
return password;
};

const mainPage = {
    async open(page) {
        await page.goto(URL);
    },
    async signUp(page) {
        await page.getByRole('link', { name: 'Sign up' }).click();
    }
};

const registerPage = {
    async register(page, user) {
        await page.getByRole('textbox', { name: 'Your Name' }).click();
        await page.getByRole('textbox', { name: 'Your Name' }).fill(user.name);
        
        await page.getByRole('textbox', { name: 'Email' }).click();
        await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
      
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(user.password);

        await page.getByRole('button', { name: 'Sign up' }).click();
    }
};

test('Пользователь может зарегистрироваться, используя email и пароль', async ({ page }) => {
  
  // act подготовка данных
  const user = {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password()
    };  
  
  // arrange предусловие - given
  await mainPage.open(page);
  await mainPage.signUp(page);
  await registerPage.register(page, user);

  // assert - сравниваем фактический и ожидаемый then
  await expect(page.getByRole('navigation')).toContainText(user.name);
});


test('Пользователь может зарегистрироваться, используя email и пароль 2', async ({ page }) => {
  
    // act подготовка данных
    const user = {
          email: faker.internet.email(),
          name: faker.person.fullName(),
          password: faker.internet.password()
      };  
    
    // arrange предусловие - given
    await mainPage.open(page);
    await mainPage.signUp(page);
    await registerPage.register(page, user);
  
    // assert - сравниваем фактический и ожидаемый then
    await expect(page.getByRole('navigation')).toContainText(user.name);
  });


  
  /*
const user = {
password: "sniper",
username: "sniper@gmail.com",
"x-power": "shiny",
countOfDogs: 3,
dogs: ["Белка", "Стрелка", "Барсик"],

getName: function() {
    console.log('Гав');
},

getNameDouble() {
    console.log("Гав2");
}
};
*/

/*
username.password;
username["x-power"];
username.getNameDouble();
*/