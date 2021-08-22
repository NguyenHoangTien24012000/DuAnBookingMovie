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
}

export const quanLyPhimServices = new QuanLyPhimSevices();

