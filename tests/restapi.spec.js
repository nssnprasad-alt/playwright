const { test, expect, request } = require('@playwright/test');

const loginPayLoad = 
{
    userEmail: "nssnprasad@gmail.com",
     userPassword: "N@vya09618"
    };

    const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};


let token; 
let ordersId;

test.beforeAll(async () => {
    const apiContext = await request.newContext();

    //Login
    const loginResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayLoad
        }
    );
           //201 200
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token; // ✅ Fix 2: Store token for use in tests
    console.log(token);



   const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers:{
                'Authorization':token,
                'content Type': "application/json"

                
            }
        }
    );
});

const orderResponseJson=await orderResponse.json();
console.log(orderResponseJson);
ordersId=orderResponseJson.orders[0];



test("Rahul's Test", async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    
});