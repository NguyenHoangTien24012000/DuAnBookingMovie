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
    dangKyTaiKhoan = (thongTinDangKi) =>{
        return this.post(`/QuanLyNguoiDung/DangKy`,thongTinDangKi)
    }

    

}


export const quanLyNguoiDung = new QuanLyNguoiDung();