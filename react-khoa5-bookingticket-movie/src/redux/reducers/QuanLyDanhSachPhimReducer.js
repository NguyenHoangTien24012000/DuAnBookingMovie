import { GET_DANH_SACH_PHIM } from "../types/QuanLyDanhSachPhimType"

const initialState = {
    danhSachPhim: [
      
    ],
    danhSachPhimDangChieu : [],
    danhSachPhimSapChieu : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DANH_SACH_PHIM : {
            state.danhSachPhim = action.danhSachPhim
            state.danhSachPhimDangChieu = action.danhSachPhim.filter(item => item.dangChieu === true)
            state.danhSachPhimSapChieu = action.danhSachPhim.filter(item => item.sapChieu = true).slice(30)
            console.log(state.danhSachPhimDangChieu)
            console.log(state.danhSachPhimSapChieu)
            return {...state}
        }


        default:
            return state
    }
}
