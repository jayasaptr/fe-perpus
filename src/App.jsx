import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/Admin/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/Admin/category/CategoryPage";
import BookPage from "./pages/Admin/book/BookPage";
import StudentsPage from "./pages/Admin/students/StudentsPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import CreateCategoryPage from "./pages/Admin/category/CreateCategoryPage";
import UpdateCategoryPage from "./pages/Admin/category/UpdateCategoryPage";
import CreateBookPage from "./pages/Admin/book/CrateBookPage";
import UpdatBookPage from "./pages/Admin/book/UpdateBookPage";
import CreateStudentPage from "./pages/Admin/students/CreateStudentPage";
import UpdateStudentPage from "./pages/Admin/students/UpdateStudentPage";
import PinjamPage from "./pages/Admin/pinjam/PinjamPage";
import Cookies from "js-cookie";
import CreatePinjamPage from "./pages/Admin/pinjam/CreatePinjamPage";

function App() {
  const user = Cookies.get("user") || "{}";
  const role = JSON.parse(user).role || "";
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/admin">
        <Route
          path="dashboard"
          element={
            isAuthenticated ? (
              <DashboardPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="category"
          element={
            isAuthenticated && role === "admin" ? (
              <CategoryPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="category/create"
          element={
            isAuthenticated && role === "admin" ? (
              <CreateCategoryPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="category/update/:id"
          element={
            isAuthenticated && role === "admin" ? (
              <UpdateCategoryPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="book"
          element={
            isAuthenticated ? (
              <BookPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="book/create"
          element={
            isAuthenticated && role === "admin" ? (
              <CreateBookPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="book/update/:id"
          element={
            isAuthenticated && role === "admin" ? (
              <UpdatBookPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="book/pinjam/:id"
          element={
            isAuthenticated ? (
              <CreatePinjamPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="students"
          element={
            isAuthenticated && role === "admin" ? (
              <StudentsPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="students/create"
          element={
            isAuthenticated && role === "admin" ? (
              <CreateStudentPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="students/update/:id"
          element={
            isAuthenticated && role === "admin" ? (
              <UpdateStudentPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="pinjam/"
          element={
            isAuthenticated ? (
              <PinjamPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
      </Route>

      <Route path="/auth">
        <Route
          path="login"
          element={
            isAuthenticated ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="register"
          element={
            isAuthenticated ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <RegisterPage />
            )
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
