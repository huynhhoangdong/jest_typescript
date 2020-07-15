import { url_api } from "./constanst";
import * as request from 'request-promise';
//var request = require('request-promise');
import { ResponseAsJSON } from "request";
var fs = require('fs');

/**
 * Register
 * @param data 
{
	"register_id": "83fd09a8-ee6a-4c40-8991-a01f4ac39a44",
	"phone": "+84907356248",
	"email": "trinull@mailinator.com",
	"password": "12345678",
	"confirm_password": "12345678"
}
 */
export const login = async (data:any) : Promise<ResponseAsJSON> => {
    const res = await request({ 
        method: 'POST',
        url: `${url_api}/api/v1.0/user/auth/login/`,
        headers: { 
        'Content-Type': 'application/json',
        },
        body: data,
        resolveWithFullResponse: true,
        json: true
    })
    return res
} 