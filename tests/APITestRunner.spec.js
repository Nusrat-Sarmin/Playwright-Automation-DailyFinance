import { test, expect } from "@playwright/test";
import { request } from "http";

var userId;

//Using Get method to view user list
test("User List", async ({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2");

    console.log(await response.json());
    expect(response.status()).toBe(200);
});

//Using Post method to create data on the user list
test("Create User", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
      data: {
        name: "morpheus",
        job: "leader",
      },
      headers: {
        Accept: "application/json",
      },
    });
  
    console.log(await response.json());
    expect(response.status()).toBe(201);
  
    var res = await response.json();
    userId = res.id;
  });

  //Update Userlist
  test("Update User", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/" + userId, {
      data: {
        name: "morpheus",
        job: "SQA",
      },
      headers: {
        Accept: "application/json",
      },
    });
  
    console.log(await response.json());
    expect(response.status()).toBe(200);
  });
  //Delete User
  test("Delete User", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/" + userId); 
    expect(response.status()).toBe(204);
  });