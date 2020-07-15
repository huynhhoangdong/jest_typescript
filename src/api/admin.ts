import { url_api } from "./constanst";
import * as request from 'request-promise';
//var request = require('request-promise');
import { ResponseAsJSON } from "request";
var fs = require('fs');


export const add_item = async (token: string, data:any) : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'POST',
        url: `${url_api}/api/v1.0/admin/wardrobe/`,
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
        url: `${url_api}/api/v1.0/admin/color/`,
        headers: { 
        'Content-Type': 'application/json',
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 
export const admin_get_size = async (token: string) : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'GET',
        url: `${url_api}/api/v1.0/admin/size/`,
        headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 
export const admin_get_size_details = async (token: string, size_id:string) : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'GET',
        url: `${url_api}/api/v1.0/admin/size/${size_id}/`,
        headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 

export const get_delivery_method = async () : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'GET',
        url: `${url_api}/api/v1.0/admin/delivery-method/`,
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
        url: `${url_api}/api/v1.0/admin/category/`,
        headers: { 
        'Content-Type': 'application/json',
        },
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 

export const admin_upload_image = async (token: any, file_path:any) : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'POST',
        url: `${url_api}/api/v1.0/admin/item/upload-image/`,
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
