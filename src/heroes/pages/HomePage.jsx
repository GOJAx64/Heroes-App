export const HomePage = () => {
  
  const logoImageUrl = `/assets/home.jpg`;

  return (
    <>
      <h1 className='font-bold text-2xl text-center'>Home Page</h1>
      <hr className='pt-2 border-slate-400'/>
      <img src={ logoImageUrl }/>
    </>
  )
}
