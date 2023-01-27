import { IMilk } from "../../Interfaces/Interfaces"
import milkImg from '../../Assets/Images/milk.png'
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineLeft } from 'react-icons/ai';
import { useEffect, useState } from "react";

interface ICard {
  milkProducts: IMilk[]
}

interface IQuantity {
  value: number,
  max: number,
  min: number
}

let milkValue = {
  value: 1,
  max: 99,
  min: 1
}

const Card = ({ milkProducts }: ICard) => {
  milkValue.max = milkProducts.length
  const [milkQuantity, setMilkQuantity] = useState<IQuantity>(milkValue as IQuantity)
  const [bubbleCount, setBubbleCount] = useState(milkQuantity.value)
  const [newVal, setNewVal] = useState(0)
  const [ordered, setOrdered] = useState(false)
  

  const { id } = useParams();
  const milk = milkProducts.find(milk => milk.id === id)
  const navigate = useNavigate()

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMilkQuantity(() => {
      return {
        value: Number(e.target.value),
        max: Number(e.target.max),
        min: Number(e.target.min)
      }
    })
  }

  const handleOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
     setOrdered(prev => !prev)
    setTimeout(()=>{
      setOrdered(prev => !prev)
    }, 1700)
  }

  useEffect(() => {
    if (!milk) {
      navigate("/*")
    } 
    setBubbleCount(() => milkQuantity.value)
    setNewVal(() => Number(((milkQuantity.value - milkQuantity.min) * 100) / (milkQuantity.max - milkQuantity.min)))
  }, [milk, milkQuantity.max, milkQuantity.min, milkQuantity.value, navigate] )

  return (
    <section className='flex min-h-[80vh]'>
      <article className="m-auto">
        <section className="relative">
          <button onClick={() => navigate(-1)} className={'flex items-center'}> <AiOutlineLeft /> Back</button>
          {ordered ? 
          <div>
            <span className="absolute top-0 right-0 border p-5 rounded-lg text-pink-400 bg-violet-200/70 border-gray-300">ORDER WAS MADE</span> 
          </div>
          : ''}
        </section>
        <section className="grid grid-cols-2 mt-16">
          <div className='w-auto bg-white flex justify-center items-center' >
            <img src={milkImg} alt="Milk" className='w-36 mx-auto my-5 ' />
          </div>
          {milk ? <div className="pt-3 pl-5 flex flex-col">
            <p>{milk!.name}</p>
            <span className="text-stone-400">{milk!.type}</span>
            <span className={`${milk!.storage < 11 ? 'text-red-400/70' : 'text-lime-700/60'}`}>
              {milk!.storage} liter
            </span>
            <form className="flex flex-col">
              <div className="relative">
                <input type="range" min="1" max={milk!.storage} step={1} value={milkQuantity.value} onChange={handleQuantity} className="mt-12 mb-20 w-full h-2 rounded bg-green-300 appearance-none" />
                <output className={`bubble absolute rounded-lg py-2 px-3 bg-white shadow-xl bottom-5 `} style={{ left: `calc(${newVal}% + (${8 - newVal * 0.15}px))` }}>{bubbleCount} liter</output>
              </div>
              <button type="submit" className=" w-28 py-1 px-4 bg-zinc-300 disabled:bg-red-400 disabled:text-white" disabled={ordered} onClick={handleOrder}>Order</button>
            </form>
          </div>
          : 
          ''
          }
        </section>
      </article>
    </section>
  )
}

export default Card