import { test, expect } from "@playwright/test";
import { readFromJSONFile } from "../pages/utils/utils";
import LoginPage from "../pages/LoginPage";
import UserDailyCost from "../pages/UserDailyCost";

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

test("Add Daily Cost", async ({ page }) => {
  const userDailyCost = new UserDailyCost(page);

  const itemName = ["Biriyani","Polaw","Kachi","Tehari","Roast"];

function generateRandomData(){
    const randomItemName = itemName[Math.floor(Math.random() * itemName.length)];

    const randomAmount = Math.floor(Math.random() * 10000) + 1;
   return {randomItemName,randomAmount};

}
for (let i = 0; i < 2; i++) { 
    const { randomItemName, randomAmount } = generateRandomData();

    await userDailyCost.addCost.click();
    await userDailyCost.addItemName.fill(randomItemName);
    await userDailyCost.addProductQuantity.click();
    await userDailyCost.addProductAmount.fill(randomAmount.toString());
    await userDailyCost.submitBtn.click();

    console.log(`Added Item: ${randomItemName}, Amount: ${randomAmount}`);
  }

  await page.locator("tbody tr").first().waitFor();
      const firstRow = page.locator("tbody tr").first();
      const cells = await firstRow.locator("td").allTextContents();
  
      console.log('First Row Data:',cells);
      //await page.pause();
});

test("Update Daily Cost", async ({ page }) => {
  const userDailyCost = new UserDailyCost(page);

  await userDailyCost.viewBtn.first().click();
  await userDailyCost.editBtn.click();
  await userDailyCost.addItemName.fill('Polaw');
  await userDailyCost.addProductQuantity.click();
  await userDailyCost.addProductAmount.fill('45');
  await userDailyCost.updateBtn.click();
  //await page.pause();

});