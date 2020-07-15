import { login } from "../../src/api/auth"
import Token from "../../src/base/token";
let tokenTest = new Token();

export const test_login =()=> describe("Add product group" , ()=>{

    test('Admin login', async () => {
        let res = await login(
            {	
                "email":"admin_mill_01@coalamails.com",
                "password": "admin2020!",
                "is_staff": true
            }
        )
        expect(res.statusCode).toBe(200)
        tokenTest.setToken(res.body.token)
        console.log('loginAuthentication: ' + JSON.stringify(res.body))
    }, 10000);

});