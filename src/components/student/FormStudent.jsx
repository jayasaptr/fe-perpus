import { useState } from "react";

export const FormStudent = (props) => {
  const {
    onSubmit,
    defaultName,
    defaultEmail,
    defaultPassword,
    defaultNisn,
    defaultClass,
    defaultDateOfBirth,
    defaultAdress,
    defaultPhoneNumber,
    defaultImage,
  } = props;

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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Masukkan Email"
            defaultValue={defaultEmail || ""}
          />
        </div>
        {/* cek jika defaultName tidak ada */}
        {!defaultName && (
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Masukkan Password"
              defaultValue={defaultPassword || ""}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="nisn">NISN</label>
          <input
            type="text"
            className="form-control"
            id="nisn"
            name="nisn"
            placeholder="Masukkan NISN"
            defaultValue={defaultNisn || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="class">Kelas</label>
          <input
            type="text"
            className="form-control"
            id="class"
            name="class"
            placeholder="Masukkan Kelas"
            defaultValue={defaultClass || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date_of_birth">Tanggal Lahir</label>
          <input
            type="date"
            className="form-control"
            id="date_of_birth"
            name="date_of_birth"
            defaultValue={defaultDateOfBirth || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Alamat</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            placeholder="Masukkan Alamat"
            defaultValue={defaultAdress || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Nomor Telepon</label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            name="phone_number"
            placeholder="Masukkan Nomor Telepon"
            defaultValue={defaultPhoneNumber || ""}
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
