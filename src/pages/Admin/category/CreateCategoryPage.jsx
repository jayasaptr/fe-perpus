import { useNavigate } from "react-router-dom";
import { FormCategory } from "../../../components/category/FormCategory";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { createCategory } from "../../../services/data/category";

const CreateCategoryPage = () => {
  const navigate = useNavigate();
  const handleCreateCategory = async (data) => {
    console.log("🚀 ~ handleCreateCategory ~ data:", data);
    try {
      const response = await createCategory(data);
      if (response.success) {
        alert("Category created successfully");
        navigate("/admin/category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout title="Create Category">
      <FormCategory onSubmit={handleCreateCategory} />
    </AdminLayout>
  );
};

export default CreateCategoryPage;
