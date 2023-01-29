import { IMilk } from "../../Interfaces/Interfaces";
import { GrClose } from 'react-icons/gr';

interface ISearchBar {
  milkProducts: IMilk[],
  searchByName: string
  setFilteredData: React.Dispatch<React.SetStateAction<IMilk[]>>
  setSearchByName: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({ milkProducts, setFilteredData, searchByName, setSearchByName }: ISearchBar) {

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchResult = e.currentTarget.value;
    setSearchByName(searchResult);
    const newFilter = milkProducts.filter(product => {
      return product.name.toLowerCase().includes(searchByName.toLowerCase());
    });

    if (searchResult === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setFilteredData([]);
    setSearchByName('');
  };

  return (
    <div className="rounded-xl  bg-white overflow-hidden">
      <input
        type="text"
        placeholder='🔍  Search'
        onChange={handleSearchFilter}
        value={searchByName}
        className="w-72 text-2xl pt-2 pb-1 pl-3 focus:outline-none" />
      {!searchByName ? '' : <button onClick={clearInput} className={'pr-2'}><GrClose /></button>}
    </div>
  );
}

export default SearchBar;


