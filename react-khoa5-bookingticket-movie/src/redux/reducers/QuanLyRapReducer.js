import { SET_HE_THONG_RAP, SET_THONG_TIN_PHIM_DETAIL } from "../types/QuanLyRapTypes"

const initialState = {
    heThongRapChieu : [],
    thongTinPhimDetail : {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_HE_THONG_RAP :{
            return {...state,heThongRapChieu : action.heThongRapChieu}
        }
        case SET_THONG_TIN_PHIM_DETAIL :{
            return {...state,thongTinPhimDetail : action.thongTinPhimDetail}
        }

    default:
        return state
    }
}
