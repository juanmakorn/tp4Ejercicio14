import React, { useState } from 'react';

const Login = () => {
  const [usuario, setusuario] = useState('');
  const [contraseña, setcontraseña] = useState('');
  const [error, setError] = useState('');

  const handleusuarioChange = (event) => {
    setusuario(event.target.value);
  };

  const handlecontraseñaChange = (event) => {
    setcontraseña(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario === 'admin' && contraseña === '123') {
      // Redireccionar a la página de administrador
      window.location.href = '/administrador';
    } else {
      // Mostrar mensaje de error y borrar campos de entrada
      setError('Error, el usuario ingrsado debe ser admin y la contraseña 123');
      setusuario('');
      setcontraseña('');
    }
  };

  return (
    <div className='container text-center'>
      <h2 className='mt-2 mb-2'>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label className='mt-2 mb-2'>
          Usuario:
          <input type="text" value={usuario} onChange={handleusuarioChange} />
        </label>
        <br />
        <label className='mt-2 mb-2'>
          Contraseña:
          <input type="contraseña" value={contraseña} onChange={handlecontraseñaChange} />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
