import { history } from "../../App"
import { quanLyNguoiDung } from "../../services/QuanLyNguoiDung"
import { SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungTypes"



export const dangNhapAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDung.dangNhap(thongTinNguoiDung)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    userLogin: result.data.content
                })
                history.goBack();
            }
        } catch (error) {
            console.log("error", error.response.data)
            alert(error.response.data.content)
        }
    }
}