import { useState } from "react";

export const FormStudent = (props) => {
  const { onSubmit, defaultName, defaultAge, defaultGrade, defaultImage } = props;

  const [studentImage, setStudentImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudentImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          onSubmit(formData);
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Nama Siswa</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Masukkan nama siswa"
            defaultValue={defaultName || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Umur</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            placeholder="Masukkan umur"
            defaultValue={defaultAge || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Kelas</label>
          <input
            type="text"
            className="form-control"
            id="grade"
            name="grade"
            placeholder="Masukkan kelas"
            defaultValue={defaultGrade || ""}
          />
        </div>
        <div className="form-group d-flex flex-column gap-4">
          <label htmlFor="image">Image</label>
          {(defaultImage || previewImage) && (
            <img
              src={previewImage || defaultImage}
              alt="preview"
              className="mb-2"
              style={{ width: "100px" }}
            />
          )}
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image"
            onChange={handleImageChange}
            defaultValue={defaultImage || ""}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
