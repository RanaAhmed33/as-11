import { useLoaderData } from "react-router-dom";


const AllToys = () => {
  const info = useLoaderData()



  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      {/* <div className="space-x-2 mb-4 mt-4">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setSearchItems(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-active mt-2">
          Search
        </button>
      </div> */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">No.</th>
              <th className="text-center">Seller Name</th>
              <th className="text-center">Toy Name</th>
              <th className="text-center">Toy Category</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">View Details</th>
            </tr>
          </thead>
          {
            info.map((item, index) => <tbody >
              <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.sellerName}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.subCategory}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">{item.description}</td>
              </tr>
            </tbody>)
          }
        </table>
      </div>
      <div className="text-center mb-4">
      </div>
    </section>
  );
};


