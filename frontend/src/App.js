import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './Table';
import { useEffect, useState } from 'react';
import { deleteProductApi, getProductsApi, postProductApi, updateProduct } from './api';
import Form from './Form';

function App() {

  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState(false);

  const [initialFormData, setFormData] = useState({
    name: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let res = await getProductsApi();
    setProducts(res.data);
  }

  const addProduct = async (product) => {
    if (edit) {
      await updateProduct(product);
    } else {
      await postProductApi(product);
    }
    setFormData({ name: '', price: '', category: '' });
    setShowForm(false);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await deleteProductApi(id);
    getProducts();
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-primary">Product Management System</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            setShowForm(true);
            setEdit(false);
            setFormData({ name: '', price: '', category: '' });
          }}
        >
          + Add Product
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <Table
            data={products}
            delete={deleteProduct}
            setFormData={setFormData}
            setShowForm={setShowForm}
            setEdit={setEdit}
          />
        </div>
      </div>

      {showForm && (
        <Form
          updateShowForm={setShowForm}
          data={initialFormData}
          add={addProduct}
        />
      )}

    </div>
  );
}

export default App;

