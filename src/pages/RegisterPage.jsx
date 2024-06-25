import { useState } from "react";

const RegisterPage = () => {
  const [imgPreview, setImgPreview] = useState("");
  const [file, setFile] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setImgPreview(URL.createObjectURL(file));
  };
  return (
    <div className="bg-gradient-primary d-flex align-items-center justify-content-center">
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Selamat Datang
                        </h1>
                      </div>
                      <form className="user">
                        <div className="form-group text-center">
                          <label htmlFor="foto">Upload Foto:</label>

                          {imgPreview && (
                            <div className="mt-3">
                              <img
                                src={imgPreview}
                                alt="Preview"
                                className="img-fluid rounded-circle mb-3"
                                style={{
                                  width: "200px",
                                  height: "200px",
                                  margin: "auto",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          )}
                          <input
                            type="file"
                            className="form-control-file text-center"
                            id="foto"
                            onChange={handleFileChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="nisn"
                            placeholder="NISN"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="nama"
                            placeholder="Nama"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="kelas"
                            placeholder="Kelas"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="date"
                            className="form-control form-control-user"
                            id="tanggalLahir"
                            placeholder="Tanggal Lahir"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="alamat"
                            placeholder="Alamat"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control form-control-user"
                            id="noTelpon"
                            placeholder="No Telpon"
                          />
                        </div>
                        <a
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Register
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="/auth/login">
                          Already have an account? Login!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
