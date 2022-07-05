import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);
    
    return (
        <div className='grid grid-cols-5 gap-2'>
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero }/> 
                ))
            }
        </div>
    )
}
