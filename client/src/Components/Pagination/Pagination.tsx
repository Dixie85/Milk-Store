
interface IPagination {
  pageNumber: number,
  total: number,
  limit: number,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ pageNumber, total, limit, setPageNumber }: IPagination) => {
  const pagesCount = Math.ceil(total / limit);
  // const pages = range(1, pagesCount);
  const onPreviousPageChange = () => {
    if (pageNumber === 1) {
      return
    } else {
      setPageNumber(prev => prev - 1)
    }
  }

  const onNextPageChange = () => {
    if (pageNumber === pagesCount) {
      return
    } else {
      setPageNumber(prev => prev + 1)
    }
  }

  return (
    <div className='flex justify-center my-16 font-black text-2xl'>
      <button className=' py-3 pl-2 cursor-pointer min-w-[4rem] rounded-md border border-gray-400' onClick={onPreviousPageChange}><p className='rotate-45 text-center text-gray-400'>⌞</p></button>
      <button className=' p-3 ml-5 cursor-pointer min-w-[4rem] rounded-md border border-black'>{pageNumber}</button>
      <span className="p-3 mx-10 text-gray-400">of</span>
      <button className=' p-3 mr-5 cursor-pointer min-w-[4rem] rounded-md border border-black'>{pagesCount}</button>
      <button className=' py-3 pr-2 cursor-pointer min-w-[4rem] rounded-md border border-gray-400' onClick={onNextPageChange}><p className='-rotate-45 text-center text-gray-400'>⌟</p></button>
    </div>
  )
}

export default Pagination