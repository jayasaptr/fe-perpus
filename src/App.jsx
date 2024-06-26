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

function App() {
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
            isAuthenticated ? (
              <CategoryPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="category/create"
          element={
            isAuthenticated ? (
              <CreateCategoryPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="category/update/:id"
          element={
            isAuthenticated ? (
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
            isAuthenticated ? (
              <CreateBookPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="book/update/:id"
          element={
            isAuthenticated ? (
              <UpdatBookPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="students"
          element={
            isAuthenticated ? (
              <StudentsPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="students/create"
          element={
            isAuthenticated ? (
              <CreateStudentPage />
            ) : (
              <Navigate to="/auth/login" replace />
            )
          }
        />
        <Route
          path="students/update/:id"
          element={
            isAuthenticated ? (
              <UpdateStudentPage />
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
