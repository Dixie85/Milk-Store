import { Link } from 'react-router-dom'
import pinkCowIcon from '../../Assets/Images/PinkCowIcon2.png'
import Navbar from '../../Components/Navbar/Navbar'

const Header = () => {
  return (
    <section className='flex justify-around items-center h-20 bg-white font-mono'>
      <Link to={'/'} className={'h-full ml-20'}><img src={pinkCowIcon} alt="logo/homebutton" className='max-h-full'/></Link> 
      <h1 className='text-4xl  text-pink-400 min-w-[30rem] text-center'>THE MILK STORE</h1>
      <Navbar />

      </section>
  )
}

export default Header