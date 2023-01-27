import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [isCartHidden, setIsCartHidden] = useState(false);
  const navigate = useNavigate()

  const openCloseCart = () => {
    setIsCartHidden(prev => !prev)
  };

  return (
    <div className="relative flex items-center mr-4 ">

    </div>
  )
}

export default Cart


