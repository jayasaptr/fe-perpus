import { useNavigate, useParams } from "react-router-dom";
import { FormCategory } from "../../../components/category/FormCategory";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { getCategoryById } from "../../../services/data/category";
import { useEffect, useState } from "react";
import { updateCategory } from "../../../services/data/category";

const UpdateCategoryPage = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState({
    id: 0,
    name: "",
  });

  const fetchProduct = async () => {
    try {
      const response = await getCategoryById(param.id);
      console.log(response.data);
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleUpdateCategory = async (data) => {
    try {
      const response = await updateCategory(category.id, data);
      if (response.success) {
        alert("Category updated successfully");
        navigate("/admin/category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout title="Update Category">
      <FormCategory
        defaultName={category.name}
        onSubmit={handleUpdateCategory}
      />
    </AdminLayout>
  );
};

export default UpdateCategoryPage;
