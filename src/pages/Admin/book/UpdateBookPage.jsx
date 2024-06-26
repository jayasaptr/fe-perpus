import { useEffect, useState } from "react";
import { FormBook } from "../../../components/book/FormBook";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { getBookById, updateBook } from "../../../services/data/book";
import { useNavigate, useParams } from "react-router-dom";

const UpdatBookPage = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [books, setBooks] = useState({
    id: 0,
    category_id: {
      id: 0,
      name: "",
    },
    name: "",
    image: "",
    stock: 0,
    publication_year: "",
  });

  const fetchBook = async () => {
    try {
      const response = await getBookById(param.id);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateBook = async (data) => {
    data.append("_method", "PATCH");
    try {
      const response = await updateBook(books.id, data);
      console.log("🚀 ~ handleUpdateBook ~ response:", response);
      if (response.success) {
        alert("Book updated successfully");
        navigate("/admin/book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <AdminLayout>
      <FormBook
        defaultName={books.name}
        defaultStock={books.stock}
        defaultPublicationYear={books.publication_year}
        defaultCategory={books.category_id}
        defaultImage={books.image}
        onSubmit={handleUpdateBook}
      />
    </AdminLayout>
  );
};

export default UpdatBookPage;
