import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loading from "../../Loading/Loading";

const UpdateToys = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const Toys = useLoaderData();
  // console.log(Toys);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    console.log(data);
    fetch(
      `https://toy-server-ranaahmed33.vercel.app/myToys/${Toys._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate("/myToys");
      });
  };
  return (
    <div className="w-full mx-auto px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 ">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* grid grid-cols-1 md:grid-cols-2 */}
        <div className="flex flex-col md:flex-row md:gap-4">
          {" "}
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              defaultValue={Toys?.name}
              placeholder="Enter name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="picture-url"
            >
              Picture URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="picture-url"
              type="text"
              defaultValue={Toys?.pictureURL}
              placeholder="Enter picture URL"
              {...register("pictureURL", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="seller-name"
            >
              Seller Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seller-name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Enter seller name"
              {...register("sellerName", { required: true })}
            />
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="seller-email"
            >
              Seller Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="seller-email"
              type="email"
              defaultValue={user?.email}
              placeholder="Enter seller email"
              {...register("sellerEmail", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sub-category"
            >
              Sub-category
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sub-category"
              {...register("subCategory", { required: true })}
              defaultValue={Toys?.subCategory}
            >
              <option value="">Select Toys Category</option>
              <option value="Math Toys">Math Toys</option>
              <option value="Engineering Toys">Engineering Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              defaultValue={Toys?.quantity}
              placeholder="Enter price"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              defaultValue={Toys?.rating}
              placeholder="Enter rating"
              {...register("rating", { required: true })}
            />
          </div>
          <div className="mb-4 sm:w-full md:w-3/6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
            >
              Available Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="number"
              defaultValue={Toys?.quantity}
              placeholder="Enter available quantity"
              {...register("quantity", { required: true })}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Detail Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="4"
            placeholder="Enter detail description"
            defaultValue={Toys?.description}
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button className="btn btn-outline btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToys;
