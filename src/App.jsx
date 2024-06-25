import { Routes, Route, useLocation } from "react-router-dom";
import DashboardPage from "./pages/Admin/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/Admin/category/CategoryPage";
import BookPage from "./pages/Admin/book/BookPage";
import StudentsPage from "./pages/Admin/students/StudentsPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/admin">
        <Route path="dashboard" Component={DashboardPage} />
        <Route path="category" Component={CategoryPage} />
        <Route path="book" Component={BookPage} />
        <Route path="students" Component={StudentsPage} />
      </Route>

      <Route path="/auth">
        <Route path="login" Component={LoginPage} />
        <Route path="register" Component={RegisterPage} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
