import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";

const BookModal = ({ productInfo, setModal }) => {
  const { user } = useContext(AuthContext);

  // console.log(productInfo);
  const navigate = useNavigate();

  const submitBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const product = form.product.value;
    const price = form.price.value;
    const number = form.number.value;
    const location = form.location.value;

    const booking = {
      name,
      email,
      product,
      price,
      number,
      location,
      img: productInfo?.img,
      seller: productInfo?.email,
    };

    console.log(booking);

    if (user) {
      fetch(`https://sh-server-site.vercel.app/bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Added Booking");
          setModal(false);
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-outline">
              <button> X </button>
            </label>
          </div>
          <h3 className="font-bold text-2xl mb-3 text-center">
            Book Your Products
          </h3>

          <form
            onSubmit={submitBook}
            action=""
            className="flex flex-col gap-5 mt-3"
          >
            <input
              type="text "
              name="name"
              className="input w-full"
              placeholder="type here"
              defaultValue={user?.displayName}
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input w-full"
              placeholder="type here"
            />
            <input
              type="text "
              name="product"
              defaultValue={productInfo?.name}
              className="input w-full"
              placeholder="type here"
            />
            <input
              type="text "
              name="price"
              defaultValue={productInfo?.price}
              className="input w-full"
              placeholder="type here"
            />
            <input
              type="number"
              name="number"
              className="input w-full"
              placeholder="Enter your Number"
            />
            <select
              name="location"
              className="select select-bordered w-full max-w-xs"
            >
              <option value={`post Office ${productInfo?.location}`} selected>
                Post Office , {productInfo?.location}
              </option>
              <option value={`${productInfo?.location} Thana`}>
                {productInfo.location} Thana
              </option>
              <option value={`${productInfo?.location} City`}>
                {productInfo?.location} City
              </option>
            </select>

            <input
              htmlFor="my-modal-6"
              type="submit"
              className="btn btn-outline"
              value="Submit "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
