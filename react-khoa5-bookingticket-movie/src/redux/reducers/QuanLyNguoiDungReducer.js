import { ACCESS_TOKEN, USER_LOGIN } from "../../util/config";
import { SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungTypes"

let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin : user
}

export default (state = initialState,action) => {
    switch (action.type) {
        
        case SET_THONG_TIN_NGUOI_DUNG : {
            const {userLogin} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(userLogin))
            localStorage.setItem(ACCESS_TOKEN, userLogin.accessToken)

            return {...state,userLogin : userLogin}
        }
  

    default:
        return state
    }
}
