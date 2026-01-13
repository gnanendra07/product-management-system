function Table(props) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th style={{ width: "25%" }}>Name</th>
            <th style={{ width: "20%" }}>Price (₹)</th>
            <th style={{ width: "20%" }}>Category</th>
            <th style={{ width: "25%" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-muted py-4">
                No products available
              </td>
            </tr>
          ) : (
            props.data.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td className="fw-semibold">{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <span className="badge bg-info text-dark">
                    {p.category}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => {
                      props.setFormData({
                        id: p.id,
                        name: p.name,
                        price: p.price,
                        category: p.category
                      });
                      props.setShowForm(true);
                      props.setEdit(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => props.delete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
