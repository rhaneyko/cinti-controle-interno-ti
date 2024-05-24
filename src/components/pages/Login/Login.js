import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <h1>LOGIN</h1>
      <form className='form'>
        <label className='label-form'>Usuário</label>
        <input placeholder='coloque seu usuário'/>
        <label>Senha</label>
        <input placeholder='coloque sua senha'/>
      </form>
    </div>
  )
}

export default Login
