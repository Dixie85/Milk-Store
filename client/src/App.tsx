import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './Components/Card/Card';
import MilkTypes from './Pages/MilkTypes/MilkTypes';
import Page404 from './Pages/Page404/Page404';
// import Test from './Components/Test/Test';
import { IMilk } from './Interfaces/Interfaces';
import Header from './Layout/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  const [milkProducts, setMilkProducts] = useState<IMilk[]>([])
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchFun = async () => {
      // setIsLoading(true)
      const { data } = await axios('http://localhost:8080/api/milk')
      setMilkProducts(data)
      // setIsLoading(false)
    }
    fetchFun()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home milkProducts={milkProducts} />}></Route>
        <Route path="/milk/:id" element={<Card milkProducts={milkProducts} />}></Route>
        <Route path="/milktypes/:milktype" element={<MilkTypes milkProducts={milkProducts} />}></Route>
        {/* <Route path="/test/" element={<Test />}></Route> */}
        <Route path="/*" element={<Page404 />}></Route>
      </Routes >
    </>
  );
}

export default App;
