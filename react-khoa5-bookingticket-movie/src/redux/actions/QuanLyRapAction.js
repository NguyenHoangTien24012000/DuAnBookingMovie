import { quanLyRapServcies } from "../../services/QuanLyRapServices"
import { SET_HE_THONG_RAP, SET_THONG_TIN_PHIM_DETAIL } from "../types/QuanLyRapTypes";



export const layDanhSachRapAction = () =>{
    return async (dispatch) =>{
        try{
            const result = await quanLyRapServcies.layThongTinLichChieuHeThongRap()
            if(result.data.statusCode === 200){
                dispatch({
                    type : SET_HE_THONG_RAP,
                    heThongRapChieu : result.data.content
                })
            }
        }catch(error){
            console.log('error', error)
        }
    }
}


export const setThongTinPhimDetailAction =(maPhim) =>{
    return async (dispatch) =>{
        try {
            const result =await quanLyRapServcies.layThongTinPhimDetail(maPhim)
            if(result.data.statusCode === 200){
                dispatch({
                    type : SET_THONG_TIN_PHIM_DETAIL,
                    thongTinPhimDetail : result.data.content
                })
            }
        } catch (error) {
            console.log({error})
        }
    }
}