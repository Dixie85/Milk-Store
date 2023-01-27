import { IMilk } from "../../Interfaces/Interfaces"
import milkImg from '../../Assets/Images/milk.png'
import { Link } from "react-router-dom"

interface ICard {
  product: IMilk
}

const DisplayCard = ({ product: { name, type, storage, id } }: ICard) => {
  return (
    <Link to={`/milk/${id}`} state={{ name, type, storage, id }}>
      <article className='flex flex-col border bg-white border-gray-300 rounded-lg overflow-hidden'>
        <div className='w-auto bg-gray-100' >
          <img src={milkImg} alt="Milk" className='w-32 mx-auto my-5' />
        </div>
        <div className="p-3">
          <p className="mb-5">{name}</p>
          <div className="flex">
            <span className="text-stone-400">{type}</span>
            <span className={`ml-auto  ${storage < 11 ? 'text-red-400/70' : 'text-lime-700/60'}`}>{storage} liter</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default DisplayCard

