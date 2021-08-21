import Axios from "axios";
import { DOMAIN,ACCESS_TOKEN } from "../util/config";


export class baseServices {
    put = (url, model) =>{
        return Axios({
            url : `${DOMAIN}/${url}`,
            method :'PUT',
            data : model,
            headers : {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
    post =  (url,model) =>{
        return  Axios({
            url : `${DOMAIN}/${url}`,
            method :'POST',
            data : model,
            headers : {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
    get = (url) =>{
        return  Axios({
            url : `${DOMAIN}/${url}`,
            method :'GET',
            headers : {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
    delete = (url) =>{
        return  Axios({
            url : `${DOMAIN}/${url}`,
            method :'DELETE',
            headers : {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
}