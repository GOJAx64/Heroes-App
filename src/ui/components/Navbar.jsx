import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
    
    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const onLogout = ({}) => {
        logout();
        navigate('/login', {
            replace: true
        });

    }
    
    const logoImageUrl = `/assets/logo.png`;

    return (
        <nav className="bg-slate-800 px-2 sm:px-4 py-4 sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logoImageUrl} className="mr-2 h-8 sm:h-8" alt="Heroes" />
                    <span className="self-center text-4xl text-slate-200 text-blue-500 font-semibold whitespace-nowrap">Heroes <span className='text-slate-300'>App</span></span>
                </Link>
                <div className="justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-2 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
                        <NavLink to="home"   className={({isActive}) => `${ isActive ? 'text-blue-500': 'text-slate-200 md:hover:text-slate-400'} text-lg block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0`}>Home</NavLink>
                        <NavLink to="marvel" className={({isActive}) => `${ isActive ? 'text-blue-500': 'text-slate-200 md:hover:text-slate-400'} text-lg block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0`}>Marvel</NavLink>
                        <NavLink to="dc"     className={({isActive}) => `${ isActive ? 'text-blue-500': 'text-slate-200 md:hover:text-slate-400'} text-lg block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0`}>DC</NavLink>
                        <NavLink to="search" className={({isActive}) => `${ isActive ? 'text-blue-500': 'text-slate-200 md:hover:text-slate-400'} text-lg block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0`}>Search</NavLink>
                        <span className='text-slate-200 text-lg block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0'>{ user?.name }</span>
                        <button onClick={ onLogout } className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-lg px-4 py-0.5 text-center">Logout</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
