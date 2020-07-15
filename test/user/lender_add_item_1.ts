import { login } from "../../src/api/auth"
import { get_category, get_color, get_delivery_method, get_size, add_item, upload_image } from "../../src/api/user"
import { admin_get_size_details, admin_get_size, admin_upload_image} from "../../src/api/admin"
import Token from "../../src/base/token";
import { user_acc, admin_acc } from "../../src/base/account_info";
const fs = require('fs');

//  import faker from 'faker';
const testFolder = process.cwd()+'\\..\\clothes\\';   
var faker = require('faker');
//import faker from 'faker';

let tokenTest = new Token();
let category:string
let category_name:string
let size:string
let size_name:string
let delivery:string
let color:string
let image_s3_id:any
let files_name:string[]=[]
let token_test:string

export const lender_add_item =()=> describe("Add product group" , ()=>{

    test('Lender login', async () => {
        let res = await login(
            user_acc[0]
        )
        expect(res.statusCode).toBe(200)
        tokenTest.settokenUser1(res.body.token)
        console.log('loginAuthentication: ' + JSON.stringify(res.body))
    }, 10000);
    test('Admin login', async () => {
        let res = await login(
            admin_acc[0]
        )
        expect(res.statusCode).toBe(200)
        tokenTest.setToken(res.body.token)
        token_test = res.body.token

        console.log('loginAuthentication: ' + JSON.stringify(res.body))
    }, 10000);

    // test('Get color', async () => {
    //     let res = await get_color(
    //     )
    //     expect(res.statusCode).toBe(200)
    //     console.log('Color: ' + JSON.stringify(res.body))
    //     color = res.body[0].id
    // }, 10000);

    // test('Get delivery method', async () => {
    //     let res = await get_delivery_method(
    //     )
    //     expect(res.statusCode).toBe(200)
    //     console.log('Delivery method: ' + JSON.stringify(res.body))
    //     delivery = res.body[0].id
    // }, 10000);

    test('Get size', async () => {
        let res = await admin_get_size(
            tokenTest.getToken(),
        )
        expect(res.statusCode).toBe(200)
        console.log('Size: ' + JSON.stringify(res.body.results))
        size = res.body.results[0].id
        size_name = res.body.results[0].name
        console.log('Size: ' + JSON.stringify(size_name))
    }, 10000);

    // test('Get size details', async () => {
    //     let res = await admin_get_size_details(
    //         tokenTest.getToken(),
    //         size
    //     )
    //     expect(res.statusCode).toBe(200)
    //     console.log('Size: ' + JSON.stringify(res.body))
    //     let cate_location = faker.random.number({min:0, max: res.body.categories.length - 1 })
    //     category = res.body.categories[cate_location].id
    //     category_name = res.body.categories[cate_location].name
    //     console.log('Category: ' + JSON.stringify(category_name))
    // }, 10000);

    // test("Upload image", async ()=> {

    //     files_name = []
    //     fs.readdirSync(testFolder).forEach((file: string) => {
    //         // console.log(file);
    //         files_name.push(file)
    //     });
        
    //     let k = faker.random.number({min:0, max: files_name.length-1})

    //     console.log(files_name[k])
    //     let path = testFolder + files_name[k]
    //     // let path = faker.image.fashion()

    //     let res = await upload_image(
    //         tokenTest.getTokenUser1(),
    //         path
    //     )

    //     image_s3_id = res.body.image_s3_id
        
    //     console.log('Image S3 Id: ' + JSON.stringify(image_s3_id))
    // }, 10000)

    // test('Add item', async () => {
    //     let res = await add_item(
    //         tokenTest.getTokenUser1(),
    //         {
    //             "brand_name": "Dior",
    //             "name": "Cute " + category_name,
    //             "size": size,
    //             "color": color,
    //             "category": category,
    //             "description": "This clothes have high quality and 100% hand made",
    //             "note": "100% hand made",
    //             "address": {
    //                 "address_1": "100 Main Street",
    //                 "address_2": null,
    //                 "postcode": "3000",
    //                 "country": "Australia",
    //                 "city": "Sydney",
    //                 "lat": "-33.12345",
    //                 "lng": "150.98"
    //             },
    //             "delivery_method": delivery,
    //             "allow_pickup": true,
    //             "retail_price": faker.random.number({min: 150, max:200}),
    //             "fee_7_day": faker.random.number({min: 10, max:50}),
    //             "fee_dry_cleaning": faker.random.number({min: 3, max:10}),
    //             "security_deposit": faker.random.number({min: 3.5, max:10.5}),
    //             "image_media": [
    //                 {
    //                     "image_s3_id": image_s3_id,
    //                     "is_main": true
    //                 }
            
    //             ]
    //         }
    //     )
    //     expect(res.statusCode).toBe(200)
    //     console.log('Add item: ' + JSON.stringify(res.body))
       
    // }, 10000);



});