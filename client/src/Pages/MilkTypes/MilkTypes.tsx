import { IMilk } from "../../Interfaces/Interfaces"
import { useParams } from "react-router-dom";
import DisplayCard from "../../Components/DisplayCard/DisplayCard";
import Pagination from "../../Components/Pagination/Pagination";
import { useState } from "react";

interface IMilkTypes {
  milkProducts: IMilk[]
}

const MilkTypes = ({ milkProducts }: IMilkTypes) => {
  const { milktype } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const cardPerPage = 9

  const filterByType = milkProducts.filter(product => {
    return product.type.toLowerCase().includes(milktype!.toLowerCase());
  });

  const pageToVisit = (pageNumber - 1) * cardPerPage;

  return (
    <section className="px-20 mx-auto max-w-5xl min-h-screen font-spartan">
      <div className="grid grid-cols-3 gap-11 mt-10">
        {filterByType
          .slice(pageToVisit, pageToVisit + cardPerPage)
          .map(pro => <DisplayCard key={pro.id} product={pro} />)}
      </div>
      <Pagination
        pageNumber={pageNumber}
        total={filterByType.length}
        limit={cardPerPage}
        setPageNumber={setPageNumber} />
    </section>
  )
}

export default MilkTypes