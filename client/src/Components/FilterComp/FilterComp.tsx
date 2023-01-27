import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import CheckBoxInput from '../CheckBoxInput/CheckBoxInput';

interface IFilterComp {
  chosenFilterInput: string[]
  setChosenFilterInput: React.Dispatch<React.SetStateAction<string[]>>,
}

const milkTypes = ['Whole milk', 'Oat milk', 'Pea milk', 'Almond milk',
 'Rice milk', 'Coconut milk', 'Soy milk', 'Walnut milk', 'Macadamia milk',
  'Hemp milk', 'Cashew milk']

const FilterComp = ({ chosenFilterInput, setChosenFilterInput }: IFilterComp) => {
  const [isFilterMenuHidden, setIsFilterMenuHidden] = useState(false);

  const openFilterMenu = () => {
    setIsFilterMenuHidden(prev => !prev)
  };

  const closeFilterMenu = () => {
    setIsFilterMenuHidden(prev => !prev)
  };

  const handleCheckBoxFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.currentTarget.name

    setChosenFilterInput(prev => {
      const existInArr = prev.find(milkType => milkType === targetName)
      if (existInArr) {
        return prev.filter(milkType => milkType !== existInArr)
      } else {
        return [...prev, targetName]
      }
    })
  }

  return (
    <div className="relative mr-28 pt-5 pl-7 text-2xl">

      <span onClick={openFilterMenu}
        className={'text-stone-400 cursor-pointer'}
      >Filter</span>

      {isFilterMenuHidden ?
        <div className="absolute top-0 left-0 py-5 px-7 bg-white min-w-[300px] max-h-80 drop-shadow-2xl overflow-scroll">
          <div className="flex justify-between">
            <span className="text-lg text-gray-500">Filter</span>
            <button onClick={closeFilterMenu} className="text-sm text-gray-500"><GrClose /></button>
          </div>
          <legend className="mt-3 mb-8 font-medium">Milk type</legend>
          {milkTypes.map(type =>
            <CheckBoxInput 
            key={type} 
            type={type} 
            handleCheckBoxFilter={handleCheckBoxFilter} 
            checkedInputs={chosenFilterInput} />)}
        </div>
        : ''}
    </div>
  )
}

export default FilterComp