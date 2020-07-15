import { url_api } from "./constanst";
import * as request from 'request-promise';
//var request = require('request-promise');
import { ResponseAsJSON } from "request";
var fs = require('fs');


export const add_item = async (token: string, data:any) : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'POST',
        url: `${url_api}/api/v1.0/user/wardrobe/`,
        headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },

        body: data,
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 

export const get_color = async () : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'GET',
        url: `${url_api}/api/v1.0/user/color/`,
        headers: { 
        'Content-Type': 'application/json',
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 
export const get_size = async () : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'GET',
        url: `${url_api}/api/v1.0/user/size/`,
        headers: { 
        'Content-Type': 'application/json',
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 
export const get_delivery_method = async () : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'GET',
        url: `${url_api}/api/v1.0/user/delivery-method/`,
        headers: { 
        'Content-Type': 'application/json',
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 
export const get_category = async () : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'GET',
        url: `${url_api}/api/v1.0/user/category/`,
        headers: { 
        'Content-Type': 'application/json',
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 

export const upload_image = async (token: any, file_path:any) : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'POST',
        url: `${url_api}/api/v1.0/user/wardrobe/upload-image/`,
        formData:{
            file: fs.createReadStream(file_path),
        },
        headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 
