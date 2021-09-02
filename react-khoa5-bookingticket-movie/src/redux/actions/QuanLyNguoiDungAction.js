import { history } from "../../App"
import { quanLyNguoiDung } from "../../services/QuanLyNguoiDung"
import { OPEN_LOADING } from "../types/LoadingTypes"
import { LAY_DANH_SACH_LOAI_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG, SET_NGUOI_DUNG_TIM_KIEM, SET_THONG_TIN_NGUOI_DUNG, THONG_TIN_NGUOI_DUNG_DAT_VE } from "../types/QuanLyNguoiDungTypes"



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

export const layDanhSachNguoiDungAction = (nguoiDung = '') =>{
    return async dispatch =>{
        try {
            const result = await quanLyNguoiDung.layDanhSachNguoiDung(nguoiDung)
            if(result.data.statusCode === 200){
                dispatch({
                    type : SET_DANH_SACH_NGUOI_DUNG,
                    danhSachNguoiDung : result.data.content
                })
            }
        } catch (error) {
            console.log("error",error)
        }
    }
}

export const themNguoiDungAction = (thongTinNguoiDung) =>{
    return async dispatch =>{
        try {
            const result = await quanLyNguoiDung.themNguoiDung(thongTinNguoiDung)
            if(result.data.statusCode === 200) {
                alert("Thêm người dùng thành công!")
                history.push('/admin/users')
            }
        } catch (error) {
            console.log("error",error)
            alert("Thêm người dùng ko thành công!!")
        }
    }
}

export const xoaNguoiDungAction = (taiKhoan) =>{
    return async dispatch =>{
      try {
        const result = await quanLyNguoiDung.xoaNguoiDung(taiKhoan)
        if(result.data.statusCode === 200){
            alert("Xoá tài khoản thành công")
            dispatch(layDanhSachNguoiDungAction())
        }
      } catch (error) {
         console.log("Error",error) 
      }
    }
}

export const capNhatThongTinNguoiDungAction = (taiKhoan) =>{
    return async dispatch =>{
        try {
            const result = await quanLyNguoiDung.capNhatThongTinNguoiDung(taiKhoan)
            if(result.data.statusCode === 200){
                alert("Cập nhật tài khoản thành công!")
                history.push('/admin/users')
            }
        } catch (error) {
            console.log("error",error)
        }
    }
}

export const layDanhSachLoaiNguoiDungAction = () =>{
    return async dispatch =>{
        try {
            const result = await quanLyNguoiDung.layDanhSachLoaiNguoiDung()
            if(result.data.statusCode === 200){
                dispatch({
                    type :LAY_DANH_SACH_LOAI_NGUOI_DUNG,
                    danhSachLoaiNguoiDung : result.data.content
                })
            }
        } catch (error) {
            console.log("error",error)
        }
    }
}