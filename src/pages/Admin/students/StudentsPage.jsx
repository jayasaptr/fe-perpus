import AdminLayout from "../../../components/layouts/AdminLayout";
import { getAllSiswa, deleteSiswa } from "../../../services/data/siswa";
import { useEffect, useState } from "react";

const StudentsPage = () => {
  const [siswa, setSiswa] = useState([]);

  const fetchSiswa = async () => {
    try {
      const response = await getAllSiswa({ pagination: 100, page: 1 });
      // set siswa yang role != admin
      response.data.data = response.data.data.filter(
        (item) => item.role !== "admin"
      );
      setSiswa(response.data.data);
    } catch (error) {
      console.log("🚀 ~ fetchSiswa ~ error:", error);
    }
  };

  const handleDeleteSiswa = async (id) => {
    try {
      const response = await deleteSiswa(id);
      if (response.success) {
        alert("Siswa berhasil dihapus");
        fetchSiswa();
      }
    } catch (error) {
      console.log("🚀 ~ handleDeleteSiswa ~ error:", error);
    }
  };

  useEffect(() => {
    fetchSiswa();
  }, []);

  return (
    <AdminLayout title="Data Siswa">
      <div className="card shadow mb-4">
        {/* <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Category</h6>
        </div> */}
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <a
              href="/admin/students/create"
              className="btn btn-primary mb-3"
              style={{ padding: "5px 20px" }}
            >
              <i className="fas fa-plus mr-2"></i>
              Add Siswa
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
                {siswa.map((item, index) => (
                  <tr key={index}>
                    <td className="align-middle">{item.nisn}</td>
                    <td className="align-middle">
                      <img
                        src={item.image}
                        alt="random"
                        className="img-fluid align-middle"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      />
                    </td>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle">{item.class}</td>
                    <td className="align-middle">{item.date_of_birth}</td>
                    <td className="align-middle">{item.address}</td>
                    <td className="align-middle">{item.phone_number}</td>
                    <td
                      className="align-middle"
                      style={{ padding: "10px", borderBottom: "none" }}
                    >
                      <a
                        href={`/admin/students/update/${item.id}`}
                        className="btn btn-warning btn-sm mr-2"
                        style={{ padding: "5px 10px" }}
                      >
                        <i className="fas fa-edit mr-2"></i>
                        Edit
                      </a>
                      <button
                        onClick={() => handleDeleteSiswa(item.id)}
                        className="btn btn-danger btn-sm"
                        style={{ padding: "5px 10px" }}
                      >
                        <i className="fas fa-trash mr-2"></i>
                        Delete
                      </button>
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

export default StudentsPage;
