import { ACCESS_TOKEN, USER_LOGIN } from "../../util/config";
import { LAY_DANH_SACH_LOAI_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG, SET_NGUOI_DUNG_TIM_KIEM, SET_THONG_TIN_NGUOI_DUNG, THONG_TIN_NGUOI_DUNG_DAT_VE } from "../types/QuanLyNguoiDungTypes"

let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin : user,
    thongTinNguoiDungDatVe : {},
    danhSachNguoiDung : [],
    danhSachLoaiNguoiDung : []
}

export default (state = initialState,action) => {
    switch (action.type) {
        
        case SET_THONG_TIN_NGUOI_DUNG : {
            const {userLogin} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(userLogin))
            localStorage.setItem(ACCESS_TOKEN, userLogin.accessToken)

            return {...state,userLogin : userLogin}
        }
        case THONG_TIN_NGUOI_DUNG_DAT_VE :{
            return {...state,thongTinNguoiDungDatVe :action.thongTinNguoiDungDatVe}
        }
        case SET_DANH_SACH_NGUOI_DUNG :{
            return {...state, danhSachNguoiDung : action.danhSachNguoiDung}
        }
        case LAY_DANH_SACH_LOAI_NGUOI_DUNG :{
            return {...state,danhSachLoaiNguoiDung : action.danhSachLoaiNguoiDung}
        }

    default:
        return state
    }
}
