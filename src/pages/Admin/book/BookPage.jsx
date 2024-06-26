import AdminLayout from "../../../components/layouts/AdminLayout";
import { getAllBook } from "../../../services/data/book";
import { useEffect, useState } from "react";

const BookPage = () => {
  const [book, setBook] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await getAllBook({ pagination: 10, page: 1 });
      console.log("🚀 ~ fetchBook ~ response", response.data.data);
      setBook(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <AdminLayout title="Data Buku">
      <div className="card shadow mb-4">
        {/* <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Category</h6>
        </div> */}
        <div className="card-body">
          <div className="d-flex justify-content-end mb-3">
            <a
              href="/admin/book/create"
              className="btn btn-primary"
              style={{ padding: "5px 20px" }}
            >
              <i className="fas fa-plus mr-2"></i>
              Add Book
            </a>
          </div>
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Nama Category</th>
                  <th>Nama Buku</th>
                  <th>Image</th>
                  <th>Stock</th>
                  <th>Tahun Terbit</th>
                  <th style={{ width: "20%" }}>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Nama Category</th>
                  <th>Nama Buku</th>
                  <th>Image</th>
                  <th>Stock</th>
                  <th>Tahun Terbit</th>
                  <th style={{ width: "20%" }}>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {book.map((item, index) => (
                  <tr key={index}>
                    <td className="align-middle text-center">
                      {item.category_id.name}
                    </td>
                    <td className="align-middle text-center">{item.name}</td>
                    <td className="align-middle text-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td className="align-middle text-center">{item.stock}</td>
                    <td className="align-middle text-center">
                      {item.publication_year}
                    </td>
                    <td
                      className="align-middle text-center"
                      style={{ padding: "10px" }}
                    >
                      <a
                        href={`/admin/book/update/${item.id}`}
                        className="btn btn-warning btn-sm mr-2"
                        style={{ padding: "5px 10px" }}
                      >
                        <i className="fas fa-edit mr-2"></i>
                        Edit
                      </a>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm"
                        style={{ padding: "5px 10px" }}
                      >
                        <i className="fas fa-trash mr-2"></i>
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BookPage;
