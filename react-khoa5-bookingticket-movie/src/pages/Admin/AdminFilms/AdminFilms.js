import React, { useEffect } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getSanhSachPhimAction } from '../../../redux/actions/QuanLyDanhSachPhimAction';
import { Fragment } from 'react';
import { history } from '../../../App';



export default function AdminFilms() {
    const {danhSachPhim} = useSelector(state => state.QuanLyDanhSachPhimReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSanhSachPhimAction())
    }, [])
    console.log(danhSachPhim)
    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            key : 'maPhim',
            width : '110px',
            sorter: (a, b) => a.maPhim - b.maPhim,
            defaultSortOrder: 'ascend',
            width : "10%"
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            render : (text,film,index) =>{
                return <img key={index} style={{width:"50px",height:"70px"}} src={text} alt={text} onError = {(e) => {e.target.onError = null; e.target.src=`https://picsum.photos/id/${index}/50/70`}} ></img>
            },
            width : "10%"
            // sorter: (a, b) => a.maPhim.toLowerCase() - b.maPhim.toLowerCase(),
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            sorter : (a,b) =>{
                let tenA = a.tenPhim.toLowerCase().trim;
                let tenB = b.tenPhim.toLowerCase().trim;
                if(tenA > tenB){
                    return 1;
                }
                return -1
            },
            width : "20%"
            
         },
         {
            title: 'Mô tả',
            dataIndex: 'moTa',
            key: 'moTa',
        
            render : (text,arr,index) =>{
                return <Fragment key ={index} >{text.length > 80 ? text.slice(0,80) + '...' : text }</Fragment>
            },
            width: "40%"
         },
         {
            title :"Xoá Sửa",
            render : (text,arr,index) =>{
                return <Fragment key = {index}>
                    <Button  className="inline-block mr-1"><i className="fa fa-edit"></i></Button>
                    <Button className="inline-block "><i className="fa fa-trash-alt"></i></Button>
                </Fragment>
            },
            width : '20%'
         }
    ];

    const data = danhSachPhim
    return (
        <div>
            <p className="font-bold text-xl">Danh Sách Phim</p>
            <Button type="primary" className="mb-2" onClick={() =>{
                history.push('/admin/addnewfilm')
            }}>Thêm Phim</Button>
            <Table columns={columns} dataSource={data}  />
        </div>
    )
}

