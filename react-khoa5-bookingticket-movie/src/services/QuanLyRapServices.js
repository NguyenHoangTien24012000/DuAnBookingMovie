import { GROUPID } from "../util/config";
import { baseServices } from "./baseServices";





export class QuanLyRapServices extends baseServices{
    constructor(){
        super();
    }

    layThongTinLichChieuHeThongRap = () =>{
        return this.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinPhimDetail = (maPhim) =>{
        return this.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }

}


export const quanLyRapServcies = new QuanLyRapServices()