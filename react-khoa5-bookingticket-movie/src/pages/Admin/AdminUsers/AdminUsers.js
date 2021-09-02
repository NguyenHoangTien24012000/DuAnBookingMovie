import { Button, Table } from 'antd'
import Search from 'antd/lib/input/Search'
import { values } from 'lodash'
import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../../App'
import { layDanhSachNguoiDungAction, timKiemNguoiDungAction, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction'

export default function AdminUsers() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction())

  }, [])
  const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  // console.log(danhSachNguoiDung)
  const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      sortDirections: ['descend'],
      width: "20%"
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ['descend'],
      width: "20%"
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ['descend'],
      width: "20%"
    },
    {
      title: 'Loại người dùng',
      dataIndex: 'maLoaiNguoiDung',
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      width: "20%"
    }, {
      title: "Xoá, Sửa",
      key: "action",

      render: (text, arr, index) => {
        return <Fragment key={index}>

          <Button className="inline-block mr-1"><NavLink to={`/admin/editUser/${arr.taiKhoan}`} ><i className="fa fa-edit" /></NavLink></Button>
          <Button className="inline-block mr-1" onClick={() => {
            if (window.confirm("Bạn có chắc muốn xoá " + arr.taiKhoan + " không?")) {
              dispatch(xoaNguoiDungAction(arr.taiKhoan))
            }

          }}><i className="fa fa-trash-alt"></i></Button>
        </Fragment>
      },
      width: '20%'
    }

  ];

  const handleChangeSearch = (e) =>{
    console.log(e.target.value)
    dispatch(layDanhSachNguoiDungAction(e.target.value))
  }
  return (
    <div>
      <p className="font-bold text-xl">Danh sách người dùng</p>
      <Button type="primary" className="mb-2" onClick={() => {
        history.push('/admin/addnewuser')
      }}>Thêm người dùng</Button>
      <br></br>
      <Search placeholder="Tìm kiếm phim " enterButton onChange={handleChangeSearch} className="mb-3 " style={{ width: "50%" }} />
      <Table columns={columns} dataSource={danhSachNguoiDung} rowKey={"taiKhoan"}/>
    </div>
  )
}
