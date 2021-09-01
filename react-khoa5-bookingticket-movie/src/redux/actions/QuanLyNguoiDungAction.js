import { history } from "../../App"
import { quanLyNguoiDung } from "../../services/QuanLyNguoiDung"
import { OPEN_LOADING } from "../types/LoadingTypes"
import { SET_THONG_TIN_NGUOI_DUNG, THONG_TIN_NGUOI_DUNG_DAT_VE } from "../types/QuanLyNguoiDungTypes"



export const dangNhapAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDung.dangNhap(thongTinNguoiDung)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    userLogin: result.data.content
                })
                history.goBack();
            }
        } catch (error) {
            console.log("error", error.response.data)
            alert(error.response.data.content)
        }
    }
}

export const thongTinTaiKhoanAction = () =>{
    return async dispatch =>{
        try {
         
            const result = await quanLyNguoiDung.thongTinTaiKhoan()
             if(result.data.statusCode === 200) {
                 dispatch({
                     type : THONG_TIN_NGUOI_DUNG_DAT_VE,
                     thongTinNguoiDungDatVe : result.data.content
                 })
             }
             

        } catch (error) {
            console.log("error",error)
        }
    }
}

export const dangKiTaiKhoanAction = (thongTinDangKi) =>{
    return async dispatch =>{
        try {
            const result = await quanLyNguoiDung.dangKyTaiKhoan(thongTinDangKi)
            if(result.data.statusCode === 200){
                alert("Đăng kí tài khoản thành công!!!")
                history.push('/home')
            }
        } catch (error) {
            console.log("Error" , error)
        }
    }
}