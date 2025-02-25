import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
    return (
        <>

            <div className='bg-slate-800 min-h-screen' >
                <div className=' max-w-lg mx-auto pt-10 px-5'>
                    <img src='/public/Materiales DevTree/logo.svg' alt='logotipo'></img>
                    <div className=' py-10'>
                         <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthLayout