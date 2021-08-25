import Axios from "axios"
import { quanLyPhimServices } from "../../services/QuanLyPhimServices"
import { GET_DANH_SACH_PHIM } from "../types/QuanLyDanhSachPhimType";

export const getSanhSachPhimAction = () =>{
    return async (dispatch) =>{
        try {
            const result = await quanLyPhimServices.layDanhSachPhim();
            if(result.data.statusCode === 200) {
                dispatch({
                    type : GET_DANH_SACH_PHIM,
                    danhSachPhim : result.data.content
                })
            }
        } catch (error) {
            console.log("error",error)
        }
    }
}