import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    
    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <a className='bg-cover py-5'>
                <img className="rounded-t-lg bg-cover " src={ heroImageUrl } alt={ superhero } />
            </a>
            <div className="p-1 items-center">
                <p className="mb-2 text-gray-700 font-bold text-center">{ superhero }</p>
                {/*<a href="#" className="inline-flex ml-7 mb-0.5 items-center py-0.5 px-3 text-sm text-center text-white bg-slate-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    read more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>*/}
            </div>
        </div>
    )
}
