import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/productsActions";

const EditProduct = ({ match }) => {
  // Alias to use the function dispatch to execute the main action of edit
  const dispatch = useDispatch();

  // Get the ID of the product that will be edited
  const { id } = match.params;

  useEffect(() => {
    dispatch(editProductAction(id));
  }, [dispatch, id]);

  // Access to our global state
  const product = useSelector(state => state.products.product);
  const error = useSelector(state => state.products.error);

  // This will be show while the API is loading
  if (!product) return "Loading ...";

  return (
    <>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          There is an error, try it again ...
        </div>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center">Edit Product</h2>
                <form>
                  <div className="form-group">
                    <label>Enter Book Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title: La ciudad y los perros"
                      defaultValue={product.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Book Price</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Price: 30$"
                      defaultValue={product.price}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark font-weight-bold text-uppercase d-block w-100"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
