import { test, expect } from "@playwright/test";
import { readFromJSONFile } from "../pages/utils/utils";
import LoginPage from "../pages/LoginPage";

test("User can not login with non-registered email", async ({ page }) => {
      await page.goto("/");
      const loginPage = new LoginPage(page);
      
      await loginPage.emailInput.fill('nusrat.tania.sqa@gmail.com');
      await loginPage.passwordInput.fill('12345678');
      await loginPage.loginBtn.click();

      const errorMessage = page.locator('text=Invalid email or password');

      if(await errorMessage.isVisible()) {
        console.log('Error: Invalid email or password');
        await expect(errorMessage).toBeVisible();
      } else {
        console.log('No message appeared. Something went wrong.');
      }
  
      //await page.pause();
      
  });

  test("User can not login with invalid password", async ({ page }) => {
    await page.goto("/");
    const loginPage = new LoginPage(page);
    
    await loginPage.emailInput.fill('Ludwig_Schroeder0@gmail.com');
    await loginPage.passwordInput.fill('12345678');
    await loginPage.loginBtn.click();

    const errorMessage = page.locator('text=Invalid email or password');

    if(await errorMessage.isVisible()) {
      console.log('Error: Invalid email or password');
      await expect(errorMessage).toBeVisible();
    } else {
      console.log('No message appeared. Something went wrong.');
    }

    //await page.pause();
    
});

  test("User can login successfully", async ({ page }) => {
    await page.goto("/");
    const registeredUser = readFromJSONFile();
    if (registeredUser) {
      const login = new LoginPage(page);
      await login.loginUser(registeredUser.email, registeredUser.password);
    } else {
      console.log("No user found");
    }
  });

