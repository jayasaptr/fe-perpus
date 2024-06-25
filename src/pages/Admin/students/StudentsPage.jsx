import AdminLayout from "../../../components/layouts/AdminLayout";

const StudentsPage = () => {
  return (
    <AdminLayout title="Data Siswa">
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
                  <th className="align-middle">NISN</th>
                  <th className="align-middle">Foto Siswa</th>
                  <th className="align-middle">Nama Siswa</th>
                  <th className="align-middle">Kelas</th>
                  <th className="align-middle">Tanggal Lahir</th>
                  <th className="align-middle">Alamat</th>
                  <th className="align-middle">No Telp</th>
                  <th className="align-middle" style={{ width: "20%" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th className="align-middle">NISN</th>
                  <th className="align-middle">Foto Siswa</th>
                  <th className="align-middle">Nama Siswa</th>
                  <th className="align-middle">Kelas</th>
                  <th className="align-middle">Tanggal Lahir</th>
                  <th className="align-middle">Alamat</th>
                  <th className="align-middle">No Telp</th>
                  <th className="align-middle" style={{ width: "20%" }}>
                    Action
                  </th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td className="align-middle">1234567890</td>
                  {/* ambil image random di internet dan beri size yang sesuai */}
                  <td className="align-middle">
                    <img
                      src="https://picsum.photos/200/200"
                      alt="random"
                      className="img-fluid"
                    />
                  </td>
                  <td className="align-middle">John Doe</td>
                  <td className="align-middle">10</td>
                  <td className="align-middle">1990-01-01</td>
                  <td className="align-middle">Jl. Raya</td>
                  <td className="align-middle">081234567890</td>
                  <td
                    className="align-middle"
                    style={{ padding: "10px", borderBottom: "none" }}
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

export default StudentsPage;
