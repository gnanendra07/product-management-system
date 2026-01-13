import { useState } from "react";

function Form(props) {
  let [product, setProduct] = useState(props.data);

  let changeFormData = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="form-overlay">
      <div className="card shadow form-card">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="mb-0">
            {product.id ? "Edit Product" : "Add Product"}
          </h5>
        </div>

        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={product.name}
                onChange={changeFormData}
                placeholder="Enter product name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={product.price}
                onChange={changeFormData}
                placeholder="Enter price"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                value={product.category}
                onChange={changeFormData}
              >
                <option value="">Select Category</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="tv">TV</option>
              </select>
            </div>

            <div className="text-end">
              <button
                className="btn btn-outline-secondary me-2"
                onClick={(e) => {
                  e.preventDefault();
                  props.updateShowForm(false);
                }}
              >
                Cancel
              </button>

              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  props.add(product);
                  props.updateShowForm(false);
                }}
              >
                {product.id ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
