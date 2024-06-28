import { useEffect, useState } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import {
  getAllPinjam,
  getPinjamByUserId,
  updatePinjam,
} from "../../../services/data/pinjam";
import Cookies from "js-cookie";

const PinjamPage = () => {
  const user = Cookies.get("user") || "{}";
  const role = JSON.parse(user).role || "";
  const [pinjam, setPinjam] = useState([]);

  const fetchPinjam = async () => {
    //cek jika role adalah admin
    if (role !== "admin") {
      try {
        const response = await getPinjamByUserId({
          pagination: 100,
          page: 1,
          user_id: JSON.parse(user).id,
        });
        console.log("🚀 ~ fetchPinjam ~ response:", response.data.data);
        setPinjam(response.data.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await getAllPinjam({ pagination: 100, page: 1 });
        console.log("🚀 ~ fetchPinjam ~ response:", response.data.data);
        setPinjam(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditPinjam = async (id) => {
    try {
      const response = await updatePinjam(id, { status: "returned" });
      console.log("🚀 ~ handleEditPinjam ~ response:", response);
      if (response.status) {
        alert("Buku berhasil dikembalikan");
        fetchPinjam();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPinjam();
  }, []);

  return (
    <AdminLayout title="Transaksi Peminjaman">
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th className="align-middle">Nisn</th>
                  <th className="align-middle">Nama Buku</th>
                  <th className="align-middle">Nama Peminjam</th>
                  <th className="align-middle">Tanggal Pinjam</th>
                  <th className="align-middle">Tanggal Pengembalian</th>
                  <th className="align-middle">Status</th>
                  <th className="align-middle" style={{ width: "10%" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th className="align-middle">Nisn</th>
                  <th className="align-middle">Nama Buku</th>
                  <th className="align-middle">Nama Peminjam</th>
                  <th className="align-middle">Tanggal Pinjam</th>
                  <th className="align-middle">Tanggal Pengembalian</th>
                  <th className="align-middle">Status</th>
                  <th className="align-middle" style={{ width: "10%" }}>
                    Action
                  </th>
                </tr>
              </tfoot>
              <tbody>
                {pinjam.map((data, index) => (
                  <tr key={index}>
                    <td className="align-middle">{data.user_id.nisn ?? ""}</td>
                    <td className="align-middle">{data.book_id.name ?? ""}</td>
                    <td className="align-middle">{data.user_id.name ?? ""}</td>
                    <td className="align-middle">{data.borrowed_at ?? ""}</td>
                    <td className="align-middle">{data.returned_at ?? ""}</td>
                    <td className="align-middle">
                      {data.status === "borrowed" ? (
                        <span className="badge badge-warning p-2">Pinjam</span>
                      ) : (
                        <span className="badge badge-success p-2">
                          Dikembalikan
                        </span>
                      )}
                    </td>
                    {data.status === "borrowed" ? (
                      <td className="align-middle text-center">
                        {role === "admin" ? (
                          <button
                            onClick={() => handleEditPinjam(data.id)}
                            className="btn btn-info"
                          >
                            Dikembalikan
                          </button>
                        ) : (
                          <i className="fas fa-times"></i>
                        )}
                      </td>
                    ) : (
                      <td className="align-middle text-center">
                        <i className="fas fa-check"> </i>
                      </td>
                    )}
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

export default PinjamPage;
