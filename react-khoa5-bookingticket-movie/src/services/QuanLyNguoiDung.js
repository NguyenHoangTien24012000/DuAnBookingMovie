import { GROUPID } from "../util/config";
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
    layDanhSachNguoiDung = (nguoiDung = '') =>{
        if(nguoiDung !== ''){
            return this.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${nguoiDung}`)
        }
        return this.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    themNguoiDung = (thongTinNguoiDung) =>{
        return this.post(`/QuanLyNguoiDung/ThemNguoiDung`,thongTinNguoiDung)
    }
    xoaNguoiDung = (taiKhoan) =>{
        return this.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    capNhatThongTinNguoiDung = (taiKhoan) =>{
        return this.post(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,taiKhoan)
    }
    layDanhSachLoaiNguoiDung = () =>{
        return this.get(`/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
    }
}


export const quanLyNguoiDung = new QuanLyNguoiDung();