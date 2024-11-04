const CartTable = () => {

  // buy data
  const buyData = (event) => {

    event.preventDefault();

    const form = event.target;
    
    const totalItem = form.totalItem.value;
    const totalPrice = form.totalPrice.value;
    const email = form.email.value;
    const accountNumber = form.accountNumber.value;

    console.log(totalItem, totalPrice, email, accountNumber)

  }

  return (
    <>
      <div className="my-8 xl:my-10 ">
        {/* content section start */}
        <div className="container mx-auto px-5 lg:px-8 xl:px-10 ">
          {/* table start */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-red-600 text-white">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover:bg-slate-100">
                  <td>1</td>
                  <td>one</td>
                  <td>Quality Control Specialist</td>
                  <td>30</td>
                  <td>2</td>
                  <td>60</td>
                </tr>
                <tr className="hover:bg-slate-100">
                  <td>1</td>
                  <td>one</td>
                  <td>Quality Control Specialist</td>
                  <td>30</td>
                  <td>2</td>
                  <td>60</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table end */}
          {/* buy start */}
          <div className="card bg-base-100 w-full shadow-2xl mt-10 sm:w-11/12  md:w-10/12 lg:w-8/12 mx-auto">
            <form onSubmit={buyData} className="card-body w-full">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-5 ">
                {/* left start */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Item</span>
                  </label>
                  <input
                    type="text"
                    value={20}
                    placeholder="your total item"
                    className="input input-bordered w-full"
                    name="totalItem"
                  />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Price</span>
                </label>
                <input
                  type="text"
                  value={300}
                  placeholder="your total price"
                  className="input input-bordered"
                  name="totalPrice"
                />
              </div>
              </div>
              {/* left end */}
              {/* right start */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="enter you email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Account Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter you account number"
                    className="input input-bordered"
                    required
                    name="accountNumber"
                  />
                </div>
              </div>
              {/* right end */}
              </div>
              <div className="form-control mt-6 w-full">
                <button className="btn bg-red-600 hover:bg-red-600 text-white w-full">Buy Now</button>
              </div>
            </form>
          </div>
          {/* buy end */}
        </div>
        {/* content section end */}
      </div>
    </>
  );
};

export default CartTable;
