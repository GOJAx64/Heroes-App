import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    const heroes = useMemo( () =>  getHeroesByPublisher(publisher) , [publisher]);
    
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero }/> 
                ))
            }
        </div>
    )
}
