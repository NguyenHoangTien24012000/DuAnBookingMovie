import React, { useEffect, useRef } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getSanhSachPhimAction, xoaPhimAction } from '../../../redux/actions/QuanLyDanhSachPhimAction';
import { Fragment } from 'react';
import { history } from '../../../App';
import { NavLink } from 'react-router-dom';

import { Input } from 'antd';
import { FieldTimeOutlined} from '@ant-design/icons';

export default function AdminFilms() {
    const { danhSachPhim } = useSelector(state => state.QuanLyDanhSachPhimReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSanhSachPhimAction())
    }, [])
    // console.log(danhSachPhim)
    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            key: 'maPhim',
            width: '110px',
            sorter: (a, b) => a.maPhim - b.maPhim,
            defaultSortOrder: 'ascend',
            width: "10%"
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            render: (text, film, index) => {
                return <img key={index} style={{ width: "50px", height: "70px" }} src={text} alt={text} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/70` }} ></img>
            },
            width: "10%"
            // sorter: (a, b) => a.maPhim.toLowerCase() - b.maPhim.toLowerCase(),
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            sorter: (a, b) => {
                let tenA = a.tenPhim.toLowerCase().trim;
                let tenB = b.tenPhim.toLowerCase().trim;
                if (tenA > tenB) {
                    return 1;
                }
                return -1
            },
            width: "20%"

        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            key: 'moTa',

            render: (text, arr, index) => {
                return <Fragment key={index} >{text.length > 80 ? text.slice(0, 80) + '...' : text}</Fragment>
            },
            width: "40%"
        },
        {
            title: "Xoá, Sửa, Tạo lịch chiếu",
            key: "action",
            dataIndex: "action",
            render: (text, arr, index) => {
                return <Fragment key={index}>
                    <Button className="inline-block mr-1"><NavLink to={`/admin/editfilm/${arr.maPhim}`} ><i className="fa fa-edit" /></NavLink></Button>
                    <Button  className="inline-block mr-1" onClick={() => {
                        if (window.confirm("Bạn có chắc muốn xoá " + arr.tenPhim + " không?")) {
                            dispatch(xoaPhimAction(arr.maPhim))
                        }

                    }}><i className="fa fa-trash-alt"></i></Button>
                     <Button className="inline-block mr-1" onClick ={() =>{
                         localStorage.setItem("filmTaoLichChieu",JSON.stringify(arr))
                     }}><NavLink to={`/admin/film/showtimes/${arr.maPhim}/${arr.tenPhim}`} ><FieldTimeOutlined style={{fontSize : "18px"}} /></NavLink></Button>

                </Fragment>
            },
            width: '20%'
        }
    ];
    const { Search } = Input;
    const onSearch = value => {
        // console.log(value)
    };
    const searchRef = useRef(null);
    const handleChange =(e) =>{
        // console.log(e.target.value)
        // searchRef.current=e.target.value
        // console.log(searchRef.current)
        
        if(searchRef.current){
            clearTimeout(searchRef.current)
          }

          searchRef.current = setTimeout(()=>{
            // dispatch(get_user_action(value))
            dispatch(getSanhSachPhimAction(e.target.value))
          },400)
      

    }
    const data = danhSachPhim
    return (
        <div>
            <p className="font-bold text-xl">Danh Sách Phim</p>
            <Button type="primary" className="mb-2" onClick={() => {
                history.push('/admin/addnewfilm')
            }}>Thêm Phim</Button>
            <br></br>
            <Search  placeholder="Tìm kiếm phim " onChange={handleChange} onSearch={onSearch} enterButton className="mb-3 " style={{width : "50%"}} />
            <Table columns={columns} dataSource={data} rowKey={"maPhim"} />
        </div>
    )
}

