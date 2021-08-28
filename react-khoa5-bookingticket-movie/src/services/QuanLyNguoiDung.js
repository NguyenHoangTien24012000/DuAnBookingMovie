import { baseServices } from "./baseServices";



class QuanLyNguoiDung extends baseServices{
    constructor(){
        super();
    }
    dangNhap = (thongTinDangNhap) =>{
        return this.post(`/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    thongTinTaiKhoan = () =>{
        return this.post(`/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
    

}


export const quanLyNguoiDung = new QuanLyNguoiDung();