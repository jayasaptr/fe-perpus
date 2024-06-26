import { useLocation } from "react-router-dom";

export const Sidebar = (props) => {
  const location = useLocation();
  const { onClick, sideToggle } = props;

  return (
    <ul className={sideToggle} id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/admin/dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-book" />
        </div>
        <div className="sidebar-brand-text mx-3">E - Perpus</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li
        className={`
        nav-item ${location.pathname === "/admin/dashboard" ? "active" : ""}
        `}
      >
        <a className="nav-link" href="/admin/dashboard">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <li
        className={`
        nav-item ${location.pathname === "/admin/category" ? "active" : ""}
        `}
      >
        <a className="nav-link" href="/admin/category">
          <i className="fas fa-fw fa-clipboard-list"></i>
          <span>Category</span>
        </a>
      </li>
      <li
        className={`
        nav-item ${location.pathname === "/admin/book" ? "active" : ""}
        `}
      >
        <a className="nav-link" href="/admin/book">
          <i className="fas fa-fw fa-book" />
          <span>Buku</span>
        </a>
      </li>
      <li
        className={`
        nav-item ${location.pathname === "/admin/students" ? "active" : ""}
        `}
      >
        <a className="nav-link" href="/admin/students">
          <i className="fas fa-fw fa-users" />
          <span>Siswa</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={onClick}
        />
      </div>
    </ul>
  );
};
