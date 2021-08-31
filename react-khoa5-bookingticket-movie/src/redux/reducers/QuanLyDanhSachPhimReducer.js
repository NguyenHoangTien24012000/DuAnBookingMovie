import { GET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/QuanLyDanhSachPhimType"

const initialState = {
    danhSachPhim: [
      
    ],
    danhSachPhimDangChieu : [],
    danhSachPhimSapChieu : [],
    thongTinPhim : {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DANH_SACH_PHIM : {
            state.danhSachPhim = action.danhSachPhim
            state.danhSachPhimDangChieu = action.danhSachPhim.filter(item => item.dangChieu === true)
            state.danhSachPhimSapChieu = action.danhSachPhim.filter(item => item.sapChieu = true).slice(11)
            
            return {...state}
        }
        case SET_THONG_TIN_PHIM :{
            return {...state, thongTinPhim : action.thongTinPhim}
        }


        default:
            return state
    }
}
