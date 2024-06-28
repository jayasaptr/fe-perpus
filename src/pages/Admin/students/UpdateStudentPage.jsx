import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { getSiswaById, updateSiswa } from "../../../services/data/siswa";
import { FormStudent } from "../../../components/student/FormStudent";
import { useEffect, useState } from "react";

const UpdateStudentPage = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({});

  const fetchStudent = async () => {
    try {
      const response = await getSiswaById(param.id);
      console.log(response.data);
      setStudent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateStudent = async (data) => {
    //tambahkan method ke dalam data
    // data.append("_method", "PATCH");
    try {
      const response = await updateSiswa(student.id, data);
      console.log("🚀 ~ handleUpdateStudent ~ response:", response);
      if (response.success) {
        alert("Siswa berhasil diupdate");
        navigate("/admin/students");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <AdminLayout>
      <FormStudent
        defaultName={student.name}
        defaultEmail={student.email}
        defaultNisn={student.nisn}
        defaultClass={student.class}
        defaultPassword={student.password}
        defaultDateOfBirth={student.date_of_birth}
        defaultAdress={student.address}
        defaultPhoneNumber={student.phone_number}
        defaultImage={student.image}
        onSubmit={handleUpdateStudent}
      />
    </AdminLayout>
  );
};

export default UpdateStudentPage;
