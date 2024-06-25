import AdminLayout from "../../../components/layouts/AdminLayout";

const BookPage = () => {
  return (
    <AdminLayout title="Data Buku">
      <div className="card shadow mb-4">
        {/* <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Category</h6>
        </div> */}
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
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
                <tr>
                  <td className="align-middle text-center">Novel</td>
                  <td className="align-middle text-center">Java Lang</td>
                  <td className="align-middle text-center">
                    <img
                      src="https://picsum.photos/100/100  "
                      alt="random"
                      className="img-fluid"
                    />
                  </td>
                  <td className="align-middle text-center">100</td>
                  <td className="align-middle text-center">2020</td>
                  <td
                    className="align-middle text-center"
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BookPage;
