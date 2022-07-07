import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;


  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText }`);
  }


  return (
    <>
      <h1 className='font-bold text-2xl text-center'>Search</h1>
      <hr className='pt-2 border-slate-400'/>

      <div className="grid grid-cols-2 gap-3'">

          <div className="">
            <h4 className='font-bold text-xl text-center mb-2'>Searching</h4>
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a hero"
                className="bg-gray-100 mb-2 border border-gray-400 space-x-32 text-gray-900 text-sm rounded-lg p-1.5 mr-1"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />
              <button  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-1.5 text-center">
                Search
              </button>
            </form>
          </div>

          <div className="">
            <h4 className='font-bold text-xl text-center mb-2'>Results</h4>
            <hr />
            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>
              {
                heroes.map( hero => (
                  <HeroCard key={ hero.id } {...hero } />
                ))
              }
            </div>
      </div>
    </>
  )
}