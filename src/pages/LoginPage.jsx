import { loginServices } from "../services/auth/login";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LoginPage = () => {
  const [show, setShow] = useState("");

  const handeClose = () => setShow("");
  const handleShow = (value) => setShow(value);

  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginServices(email, password)
      .then((response) => {
        console.log("🚀 ~ .then ~ response:", response);
        Cookies.set("token", response.token);
        Cookies.set("user", JSON.stringify(response.user));
        setIsAuthenticated(true);
        navigate("/admin/dashboard", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        handleShow(error.message);
      });
  };
  return (
    <div className="bg-gradient-primary vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <Modal show={show !== ""} onHide={handeClose}>
          <Modal.Header>
            <Modal.Title>Warning !</Modal.Title>
          </Modal.Header>
          <Modal.Body>{show}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handeClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="email"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="/auth/register">
                          Create an Account!
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

export default LoginPage;
