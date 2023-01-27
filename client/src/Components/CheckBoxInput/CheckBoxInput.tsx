import React from 'react'

interface ICheckBoxInput {
  type: string,
  handleCheckBoxFilter: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checkedInputs: string[]
}

const CheckBoxInput = ({type, handleCheckBoxFilter, checkedInputs}: ICheckBoxInput) => {
  const isChecked = checkedInputs.some(filterType => filterType === type)
  return (
    <div className='mb-2'>
      <input type="checkbox" name={type} className={'cursor-pointer'} onChange={handleCheckBoxFilter} checked={isChecked}/>
      <label htmlFor={type} className={'ml-2  text-gray-500'}>{type}</label>
    </div>
  )
}

export default CheckBoxInput