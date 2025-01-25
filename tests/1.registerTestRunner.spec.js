import { test, expect } from '@playwright/test';
import Registration from '../pages/Registration';
import { writeJSONFile } from '../pages/utils/utils';
import { faker } from "@faker-js/faker";

test("User cannot register with existing email and password", async ({ page }) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel("First Name *").fill("new");
  await page.getByLabel("Email *").fill("newuser2@gmail.com");
  await page.getByLabel("Password *").fill("user1234");
  await page.getByLabel("Phone Number *").fill("01711585854");
  await page.getByRole("radio").first().check();
  await page.getByRole("checkbox").check();
  await page.getByRole("button",{ name : "Register"}).click();
  await expect(page.getByRole("alert")
   ).toBeVisible();
}
);

test("User Can Registration Successfully", async({ page}) =>{
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Welcome to daily finance" })
    ).toBeVisible();

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

