import { Link } from 'react-router-dom';
import React from 'react';

const LoginView: React.FC = () => {
  return (
	<>
     <h1 className='text-4xl text-white font-bold'>Iniciar Sesion </h1>

    <nav>  
        <Link className='text-center text-white text-lg block' to='/auth/register'>No tienes cuenta? Crea una aqui</Link>    
    </nav>
    
    </>

  );
};

export default LoginView;