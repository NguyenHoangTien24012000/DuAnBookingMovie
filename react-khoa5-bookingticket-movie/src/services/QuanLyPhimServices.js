import { baseServices } from "./baseServices";

export class QuanLyPhimSevices extends baseServices{
    constructor(){
        super();
    }
    layDanhSachBanner = () =>{
        return this.get(`/QuanLyPhim/LayDanhSachBanner`);
    }
}

export const quanLyPhimServices = new QuanLyPhimSevices();

