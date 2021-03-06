import { history } from "../../App"
import { QuanLyDatVeServices, quanLyDatVeServices } from "../../services/QuanLyDatVeServices"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe"
import QuanLyDatVeReducer from "../reducers/QuanLyDatVeReducer"
import { CLOSE_LOADING, OPEN_LOADING } from "../types/LoadingTypes"
import { CHUYEN_TAB_KET_QUA, DAT_VE, RESET_DAT_VE, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeTypes"
import { THONG_TIN_NGUOI_DUNG_DAT_VE } from "../types/QuanLyNguoiDungTypes"


export const layChitietPhongVeAction = (maLichChieu) =>{
    return async (dispatch) =>{
        dispatch({
            type :OPEN_LOADING
        })
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
        setTimeout(() =>{
            dispatch({
                type :CLOSE_LOADING
            })
        },500)
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) =>{
    return async dispatch =>{
        try {
            dispatch({
                type : OPEN_LOADING
            })
            const result = await quanLyDatVeServices.datVe(thongTinDatVe)
           
            await dispatch(layChitietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({
                type :RESET_DAT_VE
            })
            await dispatch({
                type : CHUYEN_TAB_KET_QUA
            })
            
        } catch (error) {
            console.log("error",error)
        }
        dispatch({
            type : CLOSE_LOADING
        })
    }
}


export const datGheAction = (ghe) =>{
    return async (dispatch) =>{
        await dispatch({
            type : DAT_VE,
            gheDuocChon : ghe
        })

        
    }
}
export const taoLichChieuAction = (lichChieu) =>{
    return async dispatch =>{
       try {
        const result = await quanLyDatVeServices.taoLichChieu(lichChieu)
        if(result.data.statusCode === 200){
            alert("T???o l???ch chi???u th??nh c??ng!!!")
            history.push('/admin/films')
        }
       } catch (error) {
           console.log("error",error)
       }
    }
}