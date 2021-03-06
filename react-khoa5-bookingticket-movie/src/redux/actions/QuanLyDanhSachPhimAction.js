import Axios from "axios"
import { history } from "../../App";
import { quanLyPhimServices } from "../../services/QuanLyPhimServices"
import { CLOSE_LOADING, OPEN_LOADING } from "../types/LoadingTypes";
import { GET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/QuanLyDanhSachPhimType";

export const getSanhSachPhimAction = (tenPhim = '') =>{
    return async (dispatch) =>{
        dispatch({
            type : OPEN_LOADING
        })
        try {
         
            const result = await quanLyPhimServices.layDanhSachPhim(tenPhim);
            if(result.data.statusCode === 200) {
                dispatch({
                    type : GET_DANH_SACH_PHIM,
                    danhSachPhim : result.data.content
                })
            }
        } catch (error) {
            console.log("error",error)
        }
        
        setTimeout(() =>{
            dispatch({
                type : CLOSE_LOADING
            })
        },500)
      
    }
}

export const themPhimUploadHinhAction = (phim) =>{
    return async dispatch =>{
        try {
            const result = await quanLyPhimServices.themPhimUploadHinh(phim)
            if(result.data.statusCode === 200){
                alert("Thêm Phim thành công!!!")
                history.push('/admin/films')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const layThongTinPhimAction = (maPhim) =>{
    return async dispatch =>{
        try {
            const result = await quanLyPhimServices.layThongTinPhim(maPhim)
            if(result.data.statusCode ===200){
                // console.log(result)
                dispatch({
                    type : SET_THONG_TIN_PHIM,
                    thongTinPhim : result.data.content
                })
            }
        } catch (error) {
            console.log("error",error)
        }
    }
}

export const capNhatPhimUpLoadAction = (phimUpload) =>{
    return async dispatch =>{
        try {
            const result = await quanLyPhimServices.capNhatPhimUpLoad(phimUpload)
            if(result.data.statusCode === 200){
                alert("Cập nhật phim thành công!!!")
                history.push('/admin/films')
            }
        } catch (error) {
            console.log("error",error)
        }
    }
}


export const xoaPhimAction = (idPhim) =>{
    return async dispatch =>{
        try {
            const result = await quanLyPhimServices.xoaPhim(idPhim)
            if(result.data.statusCode === 200){
                alert("Xoá phim thành công!!!")
                dispatch(getSanhSachPhimAction())
            }
        } catch (error) {
            console.log("Error",error)
        }
    }
}