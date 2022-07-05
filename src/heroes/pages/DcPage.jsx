import { HeroList } from '../components';

export const DcPage = () => {
  return (
    <>
      <h1 className='font-bold text-2xl text-center'>DC Comics Heroes</h1>
      <hr className='pt-2 border-slate-400'/>
      <HeroList publisher={'DC Comics'}/>
    </>
  )
}
