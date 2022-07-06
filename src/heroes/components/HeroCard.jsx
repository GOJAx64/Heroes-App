import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    
    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    return (
        <Link to={`/hero/${ id }`} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:w-full hover:bg-gray-100">
            <img className="object-cover w-24 h-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={ heroImageUrl } alt={ superhero } />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>{ superhero }</h5>
                <p className="mb-0.5 italic text-gray-700">{ alter_ego }</p>
                <p className=" font-normal text-gray-700">{ first_appearance }</p>
            </div>
        </Link>
    )
}
