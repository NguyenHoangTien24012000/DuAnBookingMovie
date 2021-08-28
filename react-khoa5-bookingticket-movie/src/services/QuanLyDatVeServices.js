  
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseServices } from "./baseServices";

export class QuanLyDatVeServices extends baseServices{
    constructor(){
        super();
    }
    layChiTietPhongVe = (maLichChieu) =>{
        return this.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)

    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`/QuanLyDatVe/DatVe`,thongTinDatVe)
    }

}


export const quanLyDatVeServices = new QuanLyDatVeServices();