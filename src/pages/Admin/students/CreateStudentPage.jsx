import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { FormStudent } from "../../../components/student/FormStudent";
import { createSiswa } from "../../../services/data/siswa";

const CreateStudentPage = () => {
  const navigate = useNavigate();

  const handleCreateSiswa = async (data) => {
    try {
      const response = await createSiswa(data);
      if (response.success) {
        alert("Siswa berhasil dibuat");
        navigate("/admin/students");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <FormStudent onSubmit={handleCreateSiswa} />
    </AdminLayout>
  );
};

export default CreateStudentPage;
