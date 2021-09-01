import './App.css';
import 'antd/dist/antd.css';
import {createBrowserHistory} from 'history'
import {Router, Switch} from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import { CheckOutTemplate } from './templates/CheckOutTemplate/CheckOutTemplate';
import CheckOut from './pages/CheckOut/CheckOut';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';

import AdminFilms from './pages/Admin/AdminFilms/AdminFilms';
import AddNewFilm from './pages/Admin/AdminFilms/AddNewFilm';
import EditFilm from './pages/Admin/AdminFilms/EditFilm';
import AdminShowtimesFilm from './pages/Admin/AdminFilms/AdminShowtimesFilm';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <Loading />
      <Switch>
        <HomeTemplate exact path="/home"  Component = {Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        <CheckOutTemplate exact path="/checkout/:id" Component={CheckOut} />
        <HomeTemplate exact path="/profile" Component = {Profile} />
        <AdminTemplate exact path="/admin/films" Component ={AdminFilms} />
        <AdminTemplate exact path="/admin/addnewfilm" Component={AddNewFilm} />
        <AdminTemplate exact path="/admin/editfilm/:id" Component={EditFilm} />
        <AdminTemplate exact path ="/admin/film/showtimes/:id/:tenPhim" Component={AdminShowtimesFilm} />
        
      </Switch>
    </Router>
  );
}

export default App;
