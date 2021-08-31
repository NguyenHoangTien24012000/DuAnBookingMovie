import { GROUPID } from "../util/config";
import { baseServices } from "./baseServices";

export class QuanLyPhimSevices extends baseServices{
    constructor(){
        super();
    }
    layDanhSachBanner = () =>{
        return this.get(`/QuanLyPhim/LayDanhSachBanner`);
    }
    layDanhSachPhim = ()=>{
        return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    themPhimUploadHinh = (phim) =>{
        return this.post(`/QuanLyPhim/ThemPhimUploadHinh`,phim)
    }
    layThongTinPhim = (maPhim) =>{
        return this.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    capNhatPhimUpLoad = (phimUpdate) =>{
        return this.post(`/QuanLyPhim/CapNhatPhimUpload`,phimUpdate)
    }
    xoaPhim = (idPhim) =>{
        return this.delete(`/QuanLyPhim/XoaPhim?MaPhim=${idPhim}`)
    }
}

export const quanLyPhimServices = new QuanLyPhimSevices();

