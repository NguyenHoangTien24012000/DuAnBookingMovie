import { baseServices } from "./baseServices";



class QuanLyNguoiDung extends baseServices{
    constructor(){
        super();
    }
    dangNhap = (thongTinDangNhap) =>{
        return this.post(`/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }

}


export const quanLyNguoiDung = new QuanLyNguoiDung();