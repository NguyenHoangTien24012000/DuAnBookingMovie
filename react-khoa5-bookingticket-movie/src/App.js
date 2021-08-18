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
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        
      <Switch>
        <HomeTemplate exact path="/home"  Component = {Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <HomeTemplate exact path="/login" Component={Login} />
        <HomeTemplate exact path="/register" Component={Register} />
        
      </Switch>
    </Router>
  );
}

export default App;
