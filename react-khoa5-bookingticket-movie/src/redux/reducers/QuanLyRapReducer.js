import { SET_HE_THONG_RAP } from "../types/QuanLyRapTypes"

const initialState = {
    heThongRapChieu : []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_HE_THONG_RAP :{
            return {...state,heThongRapChieu : action.heThongRapChieu}
        }
   

    default:
        return state
    }
}
