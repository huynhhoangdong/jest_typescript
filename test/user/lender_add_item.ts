import { login } from "../../src/api/auth"
import { get_category, get_color, get_delivery_method, get_size, add_item, upload_image } from "../../src/api/user"
import { admin_get_size_details, admin_get_size, admin_upload_image} from "../../src/api/admin"
import Token from "../../src/base/token";
import { user_acc, admin_acc } from "../../src/base/account_info";
const fs = require('fs');
const xlsxFile = require('read-excel-file/node');
   //  import faker from 'faker';
const testFolder = process.cwd()+'\\..\\item\\';   
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
            user_acc[1]
        )
        expect(res.statusCode).toBe(200)
        tokenTest.settokenUser1(res.body.token)
        
        console.log('loginAuthentication: ' + JSON.stringify(res.body))
    }, 10000);

    test('Admin login', async () => {
        let res = await login(
            admin_acc[1]
        )
        expect(res.statusCode).toBe(200)
        tokenTest.setToken(res.body.token)
        token_test = res.body.token
        console.log('loginAuthentication: ' + JSON.stringify(res.body))
      
        // fs.writeFile("test.ts", token_test, function(err: any) {
        //     if(err) {
        //         return console.log(err);
        //     }
        //     console.log("The file was saved!");
        // }); 
        xlsxFile('Data.xlsx').then((rows) => {
            console.log(rows);
            console.table(rows);
        })

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
            token_test
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
// 
//     test("Upload image", async ()=> {

//         files_name = []
//         fs.readdirSync(testFolder).forEach((file: string) => {
//             // console.log(file);
//             files_name.push(file)
//         });
        
//         let k = faker.random.number({min:0, max: files_name.length-1})

//         console.log(files_name[k])
//         let path = testFolder + files_name[k]
//         // let path = faker.image.fashion()

//         let res = await upload_image(
//             tokenTest.getTokenUser1(),
//             path
//         )

//         image_s3_id = res.body.image_s3_id
        
//         console.log('Image S3 Id: ' + JSON.stringify(image_s3_id))
//     }, 10000)

//     test('Add item', async () => {
//         let res = await add_item(
//             tokenTest.getTokenUser1(),
//             {
//                 "designer": "Gucci",
//                 "name": "Embellished velvet midi dress",
//                 "size": "L",
//                 "color": "Gold",
//                 "category": "8596aabd-7d0c-46b6-9271-3a92d9e482e7",
//                 "description": "Debuting at Gucci's Spring/Summer '19 runway show, this minidress revels in color and texture. Crafted in Italy with silk lining, it has a lamb suede bodice with a golden metallic leather overlay that wraps across the front, is pleated at the hip, and cascades down the side. Slim shoulder straps and a surplice neckline complete the slip-inspired silhouette.\nmaterial: 100% lamb leather\nlining: 100% silk, partially lined",
//                 "note": "True to size\nLow back\nChinted waist\nMid-weight material\nThe model seen in the picture is 178cm-5'10\" and wearing a size IT 40",
//                 "image_media": [
//                   {
//                     "image_s3_id": image_s3_id,
//                     "is_main": true
//                   }
//                 ],
//                 "occasion": "16838741-d702-482d-8300-606db9dbff57",
//                 "meet_up": true,
//                 "meet_up_postcode": 10,
//                 "retail_price": 2700,
//                 "available_rent7": true,
//                 "fee_7_day": 100,
//                 "available_rent14": true,
//                 "fee_14_day": 120,
//                 "available_rent21": true,
//                 "fee_21_day": 140,
//                 "available_rent28": true,
//                 "fee_28_day": 150,
//                 "for_resale": true,
//                 "fee_resale": 2200,
//                 "fee_dry_cleaning": 20,
//                 "security_deposit": 30,
//                 "bicycle_courier": true,
//                 "bicycle_courier_fee": 15,
//                 "postage": true,
//                 "postage_fee": 10
//               }
//         )
//         expect(res.statusCode).toBe(200)
//         console.log('Add item: ' + JSON.stringify(res.body))
       
//     }, 10000);

});