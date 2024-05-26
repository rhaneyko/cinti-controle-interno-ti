import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Login.css'

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if(!email || !password){
      setError('Preencha todos os campos');
      return;
    }
    const res = signin(email, password);
    if(res){
      setError(res);
      return
    }
    navigate('/home')
  }

  return (
    <div className='login-container'>
      <h1 className='title'>Entre</h1>
      <form className='form'>
        <label className='label-form'>E-mail</label>
        <input 
          className='input-form' 
          placeholder='Digite seu e-mail'
          type='text'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <label className='label-form'>Senha</label>
        <input 
          className='input-form' 
          placeholder='Digite sua senha'
          type={'password'}
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
        <p style={{color: 'red', fontSize: 15}}>{error}</p>
        <button onClick={handleLogin} className='button-form'>Entrar</button>
      </form>
    </div>
  )
}

export default Login
