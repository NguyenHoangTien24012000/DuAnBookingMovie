import { CHUYEN_TAB_CHECKOUT, CHUYEN_TAB_KET_QUA, DAT_VE, RESET_DAT_VE, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeTypes"

const initialState = {
    chiTietPhongVe : {},
    danhSachGheDangDat : [],
    danhSachGheKhachHangKhacDangdat : [{maGhe : 47881}, {maGhe : 47882}],
    tabCheckOut : "1"
}

export default (state = initialState,action) => {
    switch (action.type) {
    
        case SET_CHI_TIET_PHONG_VE : {
            
            return {...state,chiTietPhongVe:action.chiTietPhongVe}
        }
        case DAT_VE:{
            let danhSachGheDangDatCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatCapNhat.findIndex(item => item.maGhe === action.gheDangDat.maGhe)
            if(index === -1){
                danhSachGheDangDatCapNhat.push(action.gheDangDat)
            }else{
                danhSachGheDangDatCapNhat.splice(index,1)
            }
            return {...state,danhSachGheDangDat : danhSachGheDangDatCapNhat}
        }
        case RESET_DAT_VE:{
            return {...state, danhSachGheDangDat : []}
        }
        case CHUYEN_TAB_KET_QUA :{
            return {...state,tabCheckOut : "2"}
        }
        case CHUYEN_TAB_CHECKOUT:{
            return {...state, tabCheckOut : action.tab}
        }
   
    default:
        return state
    }
}
