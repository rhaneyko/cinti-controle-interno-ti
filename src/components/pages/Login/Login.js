import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <h1>LOGIN</h1>
      <form className='form'>
        <label className='label-form'>Usuário</label>
        <input className='input-form' placeholder='coloque seu usuário'/>
        <label className='label-form'>Senha</label>
        <input className='input-form' placeholder='coloque sua senha'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
