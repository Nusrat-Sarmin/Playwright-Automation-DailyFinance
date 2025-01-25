import { test, expect } from "@playwright/test";
import { readFromJSONFile } from "../pages/utils/utils";
import LoginPage from "../pages/LoginPage";
import ProfileUpdate from "../pages/ProfileUpdate";
const path = require('path');

test.beforeEach("User can login successfully", async ({ page }) => {
  await page.goto("/");
  const registeredUser = readFromJSONFile();
  if (registeredUser) {
    const login = new LoginPage(page);
    await login.loginUser(registeredUser.email, registeredUser.password);
  } else {
    console.log("No user found");
  }
});

test("User can upload profile picture successfully", async ({ page }) => {
      const profileUpdate = new ProfileUpdate(page);
      
      await profileUpdate.currentProfile.click();
      await profileUpdate.profileBtn.click();
      await profileUpdate.editBtn.click();
      await profileUpdate.profilePicture.setInputFiles("./resources/Profile.png");  
      await profileUpdate.uploadImage.click();
      await profileUpdate.updateBtn.click();
      await page.waitForTimeout(3000);
      //await page.pause();
      
  });

  test("User can logout from the system", async ({ page }) => {
    const profileUpdate = new ProfileUpdate(page);

    await profileUpdate.currentProfile.click();
    await profileUpdate.logoutBtn.click()
    //await page.pause();
    
});

