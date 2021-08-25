import React from 'react'
import { Table } from 'antd';
import { NavLink } from 'react-router-dom'
import moment from 'moment';

export default function DanhSachPhimTheoCumRap(props) {

    const { danhSachPhimTheoCumRap } = props;
    // console.log('phimtheocum', danhSachPhimTheoCumRap)

    const columns = [
        {
            title: 'Danh Sách Phim theo rạp',
            dataIndex: 'name',
            width: 400,
        }


    ];

    const data = [];
    for (let phim of danhSachPhimTheoCumRap) {

        data.push({
            key : phim.maPhim,
            name: <div style={{ cursor: 'pointer' }} className="mb-4 text-left w-full flex space-x-2">
                <div className="bg-cover bg-center rounded " style={{ backgroundImage: `url(${phim.hinhAnh})`, width: "100px", height: "100px" }} ></div>
                <div className="flex flex-col  whitespace-normal">
                    <div className="w-full">
                        <h6 className="font-semibold mb-0">{phim.tenPhim}</h6>
                        <div className="grid grid-cols-4 gap-4">
                            {phim.lstLichChieuTheoPhim?.slice(0,8).map((item,index) =>{
                                // console.log("item",item)
                                return <NavLink key={index} className="border-2 rounded-lg border-yellow-400 p-1 hover:bg-red-700" to ={`/checkout/${item.maLichChieu}`}>
                                    {moment(item.ngayChieuGioChieu).format('hh:mm A')}
                                </NavLink>
                            })}
                        </div>
                    </div>
                </div>
            </div>,


        });
    }

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} scroll={{ y: 500 }} />
      
        </div>
    )
}
