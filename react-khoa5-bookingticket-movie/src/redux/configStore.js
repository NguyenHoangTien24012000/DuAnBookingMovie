import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CarouselReducer from './reducers/CarouselReducer'
import QuanLyDanhSachPhimReducer from './reducers/QuanLyDanhSachPhimReducer'
const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyDanhSachPhimReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))