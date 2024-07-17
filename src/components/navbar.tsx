import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='flex flex-row w-full justify-between px-10 py-10 shadow-md bg-gray-100'>
      <h2 className="text-base font-bold">INDOFLIX</h2>
      <div className="flex flex-row gap-5">
        <Link to={"/"}>HOME</Link>
        <Link to={"/movie"}>MOVIE</Link>
        <Link to={"/tv-show"}>TV SHOW</Link>
      </div>
    </div>
  )
}

export default Navbar
