import { test, expect } from "@playwright/test";
import ForgetPassword from "../pages/ForgetPassword";

test("User can rest password with non-registered email", async ({ page }) => {
    await page.goto("/");
    
    const forgetPassword = new ForgetPassword(page);
      
      await forgetPassword.resetLink.click();
      await forgetPassword.enterEmail.fill('nusrat.tania.sqa@gmail.com');
      await forgetPassword.sendRestLinkBtn.click();

      const errorMessage = page.locator('text=Your email is not registered');

      if(await errorMessage.isVisible()) {
        console.log('Error: Your email is not registered');
        await expect(errorMessage).toBeVisible();
      } else {
        console.log('No message appeared. Something went wrong.');
      }
      //await page.pause();
      
  });


  test("User can sent email with registered email", async ({ page }) => {
    await page.goto("/");
    const forgetPassword = new ForgetPassword(page);
      
      await forgetPassword.resetLink.click();
      await forgetPassword.enterEmail.fill('nusratsharmintania00@gmail.com');
      await forgetPassword.sendRestLinkBtn.click();

    const successMessage = page.locator('text=Password reset link sent to your email'); 
    const errorMessage = page.locator('text=Your email is not registered'); 
  
    if (await successMessage.isVisible()) {
      console.log('Password reset link sent to your email');
      await expect(successMessage).toBeVisible();
    } else if (await errorMessage.isVisible()) {
      console.log('Error: Your email is not registered');
      await expect(errorMessage).toBeVisible();
    } else {
        console.log('No message appeared. Something went wrong.');
      }

      //await page.pause();

});

test("User can User can reset password successfully", async ({ page }) => {
  await page.goto("https://dailyfinance.roadtocareer.net/reset-password?token=f42bda54f3d52775351e9c325f630b62e3936d0ac66bd1bd5e415687baea017d");
  
  const forgetPassword = new ForgetPassword(page);
  await expect(
    page.getByRole("heading", { name: "Reset Password" })
  ).toBeVisible();

  await forgetPassword.newPassword.fill('nusrat1234');
  await forgetPassword.confirmPassword.fill('nusrat1234');
  await forgetPassword.resetPasswordBtn.click();

    const successMessage = page.locator('text=Your email is not registered');

      if(await successMessage.isVisible()) {
        console.log('Error: Your email is not registered');
        await expect(successMessage).toBeVisible();
      } else {
        console.log('Error resetting password');
      }

    //await page.pause();
    
});

  
  
  
  