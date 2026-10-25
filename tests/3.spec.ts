import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';

const URL = 'https://realworld.qa.guru/';
let secret;


// старый способ
function getEmail(argument) {
let email = faker.internet.email();

return email;

}


const getPassword = (lengthOfPassword) => {
let password = faker.internet.password({length: lengthOfPassword});

return password;

// return faker.internet.password();
}

 test('test', async ({ page }) => {
    /*
    const dogs = ['Белка', 'Бонд', 'Кейси'];
    console.log(dogs);
    console.log(dogs[0]);
    console.log(dogs.length);
    console.log(dogs[dogs.length - 1]);
    console.log(dogs.includes('Стрелка'));
    // arrange - предусловие - given
    */

/*
heap stack
1 - медленная
2 - быстрая
99 - память а1;
let a = 99; a1
let b = a; a2

const arr = [''mnml.tech];
[a3 ссылка на FEFEFE] -> ///ifFEFEFE///;
*/


  await page.goto(URL);
  //await page.locator('.tag-pill').click();
  const tags = await page.locator('.tag-pill');
  const dogs = ['Белка', 'Бонд', 'Кейси'];
  const arr = dogs;
  dogs.push('Стрелка');
  
  console.log(dogs);
  console.log('arr');

  console.log(arr);

  console.log(typeof tags);
  //await expect(tags).toHaveCount(53);
  await expect(tags).toHaveText(depraedor);


  /*
  const cup = ['Чашка', 'Кружка', 'Бокал'];
  const giftForAnjela = cup;
  giftForAnjela.push['Кружка с котиком'];
  console.log(cup);
  console.log(giftForAnjela);

  const courses = [
  ['js', 'css', 'git'],
  ['api', 'rabbitmq', 'graphql', 'grpc'],
  ['ai']
  ];
  console.log(courses[0[[0]]]);
  console.log(courses[1][courses[1].length - 1]);
  */


 // console.log('текст');
 // console.log(secret);
 //  getDog('собака');
//  console.log(getDog('собака'));

  // act - шаги - when

  const email = getEmail();
  await page.getByRole('link', { name: 'Sign up' }).click();
  //await expect(page.getByRole('textbox', { name: 'Your Name' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  //await page.getByRole('textbox', { name: 'Your Name' }).fill(email);
  await page.getByRole('textbox', { name: 'Your Name' }).fill(email);

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(getPassword(10));

  await page.getByRole('button', { name: 'Sign up' }).click();

// assert - сравниваем фактический и ожидаемый then
  await expect(page.getByRole('navigation')).toContainText(email);

});

/*
'Люба'
"Люба"
`Люба`
3
15.3
true
false

const nameOfDog = 'Белка';
let nameOfSmallDog; 
nameOfSmallDog = 'Стрелка';

let a = '';
let b = ' ';
let c = null;
let d = 0;

function getDog(argument) {
console.log('текст');
console.log(argument);

return argument+1;

}


*/