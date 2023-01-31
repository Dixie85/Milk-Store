import cowBringMilk1 from '../../Assets/Images/cowBringMilk1.png'
import MilkTypesDropdown from '../MilkTylesDropdown/MilkTypesDropdown'

const Navbar = () => {
  return (
    <section className="flex h-full">
      <MilkTypesDropdown />
      <div className='relative max-h-[95%] cursor-pointer'>
        <span className='absolute min-w-[1.5rem] min-h-5  text-center bg-rose-300 text-gray-800 rounded-full font-bold'>3</span>
        <img src={cowBringMilk1} alt="cart" className="max-h-full" />
      </div>

    </section>
  )
}

export default Navbar