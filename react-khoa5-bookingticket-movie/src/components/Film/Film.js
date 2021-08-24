import { Button } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import hoverFilm from './Film.module.css'
export default function Film(props) {
    const { tenPhim, hinhAnh, moTa,maPhim } = props.dataFilm
    return (
        <div>
            <div className="h-full rounded-lg shadow-xl m-2 relative">
                <div className={hoverFilm.parent} style={{ position: 'relative', cursor: 'pointer' }}>
                    <div style={{ backgroundImage: `url(${hinhAnh}),url(https://picsum.photos/2401)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <img className="w-full opacity-0" style={{ height: '280px' }} src={hinhAnh} />
                    </div>
                    <div className={hoverFilm.child} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                        <i className="fa fa-play-circle text-white text-4xl"></i>
                    </div>
                    <div className={hoverFilm.blackHover}></div>
                </div>

                <div className="w-full p-2 h-28  relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    <p className="font-bold text-base mb-0">{tenPhim}</p>
                    <p className="mb-0">{moTa.length + tenPhim.length > 100 ? <span>{moTa.slice(0, 30)}...</span> : <span>{moTa.slice(0, 60)}</span>}</p>
                    <div className="absolute bottom-1 left-2">
                        <NavLink to={`/detail/${maPhim}`}> <Button type="danger" shape="round">Đặt Vé</Button></NavLink>

                    </div>
                </div>

            </div>

        </div>
    )
}
