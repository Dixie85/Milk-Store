import { useState } from "react"
import DisplayCard from "../../Components/DisplayCard/DisplayCard"
import SearchBar from "../../Components/SearchBar/SearchBar"
import { IMilk } from "../../Interfaces/Interfaces"
import FilterComp from "../../Components/FilterComp/FilterComp"

interface IHome {
  milkProducts: IMilk[]
}

const Home = ({ milkProducts }: IHome) => {

  const [filteredData, setFilteredData] = useState<IMilk[]>([]);
  const [searchByName, setSearchByName] = useState('');
  const [chosenFilterInput, setChosenFilterInput] = useState<string[]>([]);


  return (
    <section className="px-20 mx-auto max-w-5xl min-h-screen font-spartan">
      <section className="flex justify-between mt-16">

        <div className='flex flex-col '>
          <SearchBar
            milkProducts={milkProducts}
            setFilteredData={setFilteredData}
            searchByName={searchByName}
            setSearchByName={setSearchByName}
          />
          <span className="mt-6 pl-2">{
            filteredData.length > 1 ?
              filteredData.length
              : searchByName.length > 1 ?
                filteredData.length
                : milkProducts.length} products</span>
        </div>

        <FilterComp
          chosenFilterInput={chosenFilterInput}
          setChosenFilterInput={setChosenFilterInput}
        />

      </section>

      <section className="grid grid-cols-3 gap-11 mt-10 mb-10">
        {filteredData.length > 1 || searchByName.length ?
          !chosenFilterInput.length ?
            filteredData.map(pro => <DisplayCard key={pro.id} product={pro} />)
            :
            filteredData
              .filter(pro =>
                chosenFilterInput
                  .find(filterType => pro.type.toLowerCase()
                    .includes(filterType.toLowerCase())
                  )
              )
              .map(pro => <DisplayCard key={pro.id} product={pro} />)
          : !chosenFilterInput.length ?
            milkProducts.map(pro => <DisplayCard key={pro.id} product={pro} />)
            :
            milkProducts
              .filter(pro =>
                chosenFilterInput
                  .find(filterType => pro.type.toLowerCase()
                    .includes(filterType.toLowerCase())
                  )
              )
              .map(pro => <DisplayCard key={pro.id} product={pro} />)
        }
      </section>

    </section>
  )
}

export default Home