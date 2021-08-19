const initialState = {
    arrCarousel : [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        },
        {
            "maBanner": 2,
            "maPhim": 1283,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/lat-mat-48h.png"
        },
        {
            "maBanner": 3,
            "maPhim": 1284,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/cuoc-chien-sinh-tu.png"
        }
    ]
}



export default (state = initialState, action) => {
    switch (action.type) {



        default:
            return state
    }
}
