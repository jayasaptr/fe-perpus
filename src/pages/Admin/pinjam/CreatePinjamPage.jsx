import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { getBookById } from "../../../services/data/book";
import { useEffect, useState } from "react";
import { createPinjam } from "../../../services/data/pinjam";
import Cookies from "js-cookie";

const CreatePinjamPage = () => {
  const user = Cookies.get("user");
  const userData = JSON.parse(user);
  const param = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const [pinjamDate, setPinjamDate] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBook = async () => {
    try {
      const response = await getBookById(param.id);
      console.log("🚀 ~ fetchBook ~ response:", response.data);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePinjam = async () => {
    console.log("🚀 ~ handlePinjam ~ pinjamDate", pinjamDate);
    const data = {
      user_id: userData.id,
      book_id: param.id,
      borrowed_at: pinjamDate,
      returned_at: new Date(
        new Date(pinjamDate).getTime() + 7 * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split("T")[0],
    };

    try {
      const response = await createPinjam(data);
      console.log("🚀 ~ handlePinjam ~ response:", response);
      if (response.status) {
        alert("Buku berhasil dipinjam");
        navigate("/admin/pinjam");
      }
    } catch (error) {
      console.log("🚀 ~ handlePinjam ~ error:", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <AdminLayout title={`Pinjam Buku ${book.name ?? ""}`}>
      <div className="col-md-12 mb-4">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">Detail Buku</h5>
          </div>
          {loading ? (
            () => <p>Loading...</p>
          ) : (
            <div className="card-body">
              <div className="text-center mb-3">
                <img
                  src={book.image ?? ""}
                  alt={book.name ?? ""}
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <h6 className="text-muted">Nama Buku:</h6>
              <p className="font-weight-bold">{book.name ?? ""}</p>
              <h6 className="text-muted">Category:</h6>
              <p className="font-weight-bold">{book.category_id.name ?? ""}</p>
              <h6 className="text-muted">Tahun Terbit:</h6>
              <p className="font-weight-bold">{book.publication_year ?? ""}</p>
              <h6 className="text-muted">Stok:</h6>
              <p className="font-weight-bold">{book.stock ?? ""}</p>
            </div>
          )}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePinjam();
        }}
      >
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Pinjam Buku</h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="pinjamDate" className="font-weight-bold">
                  Pilih Tanggal Pinjam:
                </label>
                <input
                  type="date"
                  id="pinjamDate"
                  className="form-control"
                  value={pinjamDate}
                  onChange={(e) => setPinjamDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3 w-100">
                Pinjam Buku
              </button>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreatePinjamPage;
