import { Fragment } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
            <Route exact path='/home' element={<Private Item={Home}/>} />
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='*' element={<Login />} />
        </Routes>
      </Fragment>
      
    </BrowserRouter>
  )
}

export default RoutesApp;