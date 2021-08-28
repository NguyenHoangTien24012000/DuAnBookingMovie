import { quanLyDatVeServices } from "../../services/QuanLyDatVeServices"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe"
import { SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeTypes"
import { THONG_TIN_NGUOI_DUNG_DAT_VE } from "../types/QuanLyNguoiDungTypes"


export const layChitietPhongVeAction = (maLichChieu) =>{
    return async (dispatch) =>{
        try {
            const result =await quanLyDatVeServices.layChiTietPhongVe(maLichChieu)
            // console.log("result",result)
            if(result.data.statusCode === 200){
                dispatch({
                    type : SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe : result.data.content
                })
            }
        } catch (error) {
            console.log("error",error)
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) =>{
    return async dispatch =>{
        try {
            const result = await quanLyDatVeServices.datVe(thongTinDatVe)
            
          
        } catch (error) {
            console.log("error",error)
        }
    }
}