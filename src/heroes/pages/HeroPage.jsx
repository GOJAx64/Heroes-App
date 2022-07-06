import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroesById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if(!hero) {
    return <Navigate to='/home' />;
  }
  
  return (
    <div className="flex items-center bg-white rounded-lg border shadow-md md:w-full hover:bg-gray-100">
        <img className="object-cover w-1/3 h-2/3 rounded-t-lg md:rounded-none md:rounded-l-lg" src={`/assets/heroes/${id}.jpg`} alt={ hero.superhero } />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className='text-2xl text-blue-600 font-bold'>{hero.superhero}</h3>
          <hr className='pt-2 border-slate-400 mb-4'/>
          <p className='font-bold text-lg mb-0.5'>Publisher: <span className='font-normal text-base'>{ hero.publisher }</span></p>
          <p className='font-bold text-lg mb-0.5'>Alter Ego: <span className='font-normal text-base'>{ hero.alter_ego }</span></p>
          <p className='font-bold text-lg mb-0.5'>First Appearance: <span className='font-normal text-base'>{ hero.first_appearance }</span></p>
          <p className='font-bold text-lg mb-4'>Characters: <span className='font-normal text-base'>{ hero.characters }</span></p>
          <button onClick={ onNavigateBack } className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-1.5 text-center'>Back</button>
        </div>
    </div>
  )
}
