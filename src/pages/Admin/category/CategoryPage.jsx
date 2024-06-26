import { useEffect, useState } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { getAllCategory } from "../../../services/data/category";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await getAllCategory({ pagination: 10, page: 1 });
      console.log("🚀 ~ fetchCategory ~ response:", response.data.data);
      setCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <AdminLayout title="Data Category">
      <div className="card shadow mb-4">
        {/* <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Category</h6>
        </div> */}
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <a
              href="/admin/category/create"
              className="btn btn-primary mb-3"
              style={{ padding: "5px 20px" }}
            >
              <i className="fas fa-plus mr-2"></i>
              Add Category
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
                  <th>ID</th>
                  <th>Nama Category</th>
                  <th style={{ width: "20%" }}>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Nama Category</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {/* <tr>
                  <td>RK.1</td>
                  <td>Novel</td>
                  <td
                    className="d-flex justify-content-center"
                    style={{ padding: "10px" }}
                  >
                    <a
                      href="#"
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
                </tr> */}
                {category.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td
                      className="d-flex justify-content-center"
                      style={{ padding: "10px" }}
                    >
                      <a
                        href={`/admin/category/update/${item.id}`}
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

export default CategoryPage;
