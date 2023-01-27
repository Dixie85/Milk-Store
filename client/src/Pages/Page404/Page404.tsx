import { useNavigate } from 'react-router-dom'
import the_404 from '../../Assets/Images/the_404.png'

const Page404 = () => {
  const navigate = useNavigate()
  return (
    <section className='grid grid-cols-1 '>
      <div className='flex flex-col mx-auto text-center text-rose-500'>
        <p className='mt-5  text-5xl'>Oh...404</p>
        <img src={the_404} alt="404 pictire" onClick={()=>navigate('/')} className={'cursor-pointer'}/>
        <p className='text-xl'>SOMETHING WENT WRONG</p>
      </div >
    </section>
  )
}

export default Page404