import { test, expect } from '@playwright/test';
import Registration from '../pages/Registration';
import { writeJSONFile } from '../pages/utils/utils';
import { faker } from "@faker-js/faker";

test("User Can Registration Successfully", async({ page}) =>{
    await page.goto("/");

    const reg = new Registration(page);

    function generatePhoneNumber() {
        return (
          "01" + Math.floor(100000000 + Math.random() * 900000000).toString()
        );
      }
  
      const phoneNumber = generatePhoneNumber();

    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.username() + "@gmail.com",
        password: faker.internet.password(),
        phoneNumber: phoneNumber,
        address: faker.location.city(),
    }
   await reg.registerUser(userData);

   writeJSONFile(userData);
}
);