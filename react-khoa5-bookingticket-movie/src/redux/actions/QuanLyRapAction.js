import { quanLyRapServcies } from "../../services/QuanLyRapServices"
import { SET_HE_THONG_RAP } from "../types/QuanLyRapTypes";



export const layDanhSachRapAction = () =>{
    return async (dispatch) =>{
        try{
            const result = await quanLyRapServcies.layThongTinLichChieuHeThongRap()
           
            dispatch({
                type : SET_HE_THONG_RAP,
                heThongRapChieu : result.data.content
            })
        }catch(error){
            console.log('error', error)
        }
    }
}