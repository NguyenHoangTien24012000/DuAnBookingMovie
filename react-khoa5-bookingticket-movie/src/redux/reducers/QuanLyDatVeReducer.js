import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeTypes"

const initialState = {
    chiTietPhongVe : {},
    danhSachGheDangDat : []
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
   
    default:
        return state
    }
}
