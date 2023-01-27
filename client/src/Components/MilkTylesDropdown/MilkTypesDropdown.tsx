import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const milkTypes = ['Whole milk', 'Oat milk', 'Pea milk', 'Almond milk',
  'Rice milk', 'Coconut milk', 'Soy milk', 'Walnut milk', 'Macadamia milk',
  'Hemp milk', 'Cashew milk']

const MilkTypesDropdown = () => {
  const [isDropdownHidden, setIsDropdownHidden] = useState(false);
  const navigate = useNavigate()

  const openCloseDropdown = () => {
    setIsDropdownHidden(prev => !prev)
  };

  return (
    <div className="relative flex items-center mr-4 ">

      <button
        className="px-6 py-3 font-black cursor-pointer text-white bg-rose-300 
        border rounded-full border-gray-500/50 hover:bg-rose-300/70 hover:text-black
        active:bg-violet-700/30 focus:outline-none "
        onClick={openCloseDropdown}>
        Milk Types
      </button>

      {isDropdownHidden ?
        <div className="absolute top-16 left-16 my-2 px-5 bg-white min-w-[300px] max-h-80 drop-shadow-2xl overflow-scroll rounded-lg z-10">
          <div className="flex flex-col justify-between">
            {milkTypes.map(type => {
              return (
                <div className='py-1 my-1 pl-3 border border-gray-600 rounded-xl
                     cursor-pointer hover:text-white hover:bg-rose-300 border-gray-500/50 
                     bg-rose-50 text-black'
                  onClick={() => navigate(`/milktypes/${type}`)}>
                  <span>{type}</span>
                </div>
              )
            })}
          </div>
        </div>
        : ''}
    </div>
  )
}

export default MilkTypesDropdown


