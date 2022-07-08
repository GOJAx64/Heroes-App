import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  
  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {
      
    login('Alberto');    
      
    navigate('/', {
        replace: true
    });
  }

  const logoImageUrl = `/assets/logo.png`;

  return (
    <>
      <nav className="bg-slate-800 px-2 sm:px-4 py-4 sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/login" className="flex items-center">
                    <img src={ logoImageUrl } className="mr-2 h-8 sm:h-8" alt="Heroes" />
                    <span className="self-center text-4xl text-slate-200 text-blue-500 font-semibold whitespace-nowrap">Heroes <span className='text-slate-300'>App</span></span>
                </Link>
                <div className="justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-2 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
                        <button onClick={ onLogin } className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-lg px-4 py-0.5 text-center">Login</button>
                    </ul>
                </div>
            </div>
      </nav>
      <div className='container mx-auto py-4'>
        <h1 className='font-bold text-2xl text-center'>Login page</h1>
        <hr className='pt-2 border-slate-400'/>
      </div>
      {/*<img src={ `/assets/home.jpg` }/>*/}
    </>
  )
}
