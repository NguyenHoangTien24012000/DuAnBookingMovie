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
    layThongTinHeThongRap = () =>{
        return this.get(`/QuanLyRap/LayThongTinHeThongRap`)
    }
    layThongTinCumRapTheoHeThong = (maHeThongRap) =>{
        return this.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }

}


export const quanLyRapServcies = new QuanLyRapServices()