import React from 'react';
import estilo from './registro.module.css';

const Registro = () => {
  return (
    <div className={estilo.wrapper}>
      <form action=''>
        <h1>Registro de usuario</h1>

        <div className={estilo.inputbox}>
          <div className={estilo.inputfield}>
            <input type='text' placeholder='Nombres' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='text' placeholder='Apellidos' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='tel' placeholder='Numero de telefono' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='date' placeholder='Fecha de nacimiento' required/>
          </div>
          
          <div className={estilo.inputfield}>
            <input type='text' placeholder='Tipo de usuario' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='text' placeholder='Direccion' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='text' placeholder='Tipo de membresia' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='email' placeholder='Email' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='password' placeholder='Contraseña' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='date' placeholder='Fecha de registro' required/>
          </div>

          <div className={estilo.inputfield}>
            <input type='number' placeholder='Id del cliente' required/>
          </div>
          <button type='submit' className={estilo.btn}>Registrar usuario</button>
        </div>
      </form>
    </div>
  )
}

export default Registro;