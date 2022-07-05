import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className='font-bold text-2xl text-center'>Marvel Comics Heroes</h1>
      <hr className='pt-2 border-slate-400'/>
      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}
