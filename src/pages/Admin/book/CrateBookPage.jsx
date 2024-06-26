import { useNavigate } from "react-router-dom";
import { FormBook } from "../../../components/book/FormBook";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { createBook } from "../../../services/data/book";

const CreateBookPage = () => {
  const navigate = useNavigate();
  const handleCreate = async (data) => {
    try {
      const response = await createBook(data);
      if (response.success) {
        alert("Book created successfully");
        navigate("/admin/book");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout title="Create Book">
      <FormBook onSubmit={handleCreate} />
    </AdminLayout>
  );
};

export default CreateBookPage;
