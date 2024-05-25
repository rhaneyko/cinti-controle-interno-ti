import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Login.css'

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate;

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if(!user || !password){
      setError('Preencha todos os campos');
      return;
    }
    const res = login(user, password);
    if(res){
      setError(res);
      return
    }
    navigate('/home')
  }

  return (
    <div className='login-container'>
      <h1>Entre</h1>
      <form className='form'>
        <label className='label-form'>E-mail</label>
        <input 
          className='input-form' 
          placeholder='Digite seu e-mail'
          type='text'
          value={user}
          onChange={(e) => [setUser(e.target.value), setError('')]}
        />
        <label className='label-form'>Senha</label>
        <input 
          className='input-form' 
          placeholder='Digite sua senha'
          type={'password'}
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login
