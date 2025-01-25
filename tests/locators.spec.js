// import { test, expect } from '@playwright/test';

// test.skip("Fill the input field", async ({page}) =>{
//  await page.goto('/');
//  // await page.locator("#email").fill("test@gmail.com",{timeout:5000});
//     await page.getByRole("textbox", { name : "Email"}).fill("admin@test.com");
//     await page.getByRole("textbox",{ name :"Password"}).fill("admin123");
//     await page.getByRole("button",{name : "LOGIN"}).click();
//     //await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
//     //await page.getByRole('heading', { name: 'Admin Dashboard' }).click();

//     await page.locator("tbody tr").first().waitFor();
//     const firstRow = page.locator("tbody tr").first();
//     const cells = await firstRow.locator("td").allTextContents();

//     console.log(cells);
//     //await page.pause();
// }
// );