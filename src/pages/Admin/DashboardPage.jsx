import { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import {
  getDashboardData,
  getDashboardDataByUserId,
} from "../../services/data/dashboard";
import Cookies from "js-cookie";

const DashboardPage = () => {
  const user = Cookies.get("user") || "{}";
  const role = JSON.parse(user).role || "";
  const [dashboardData, setDashboardData] = useState({});

  const fetchDashboardData = async () => {
    if (role !== "admin") {
      try {
        const response = await getDashboardDataByUserId(JSON.parse(user).id);
        console.log("🚀 ~ fetchDashboardData ~ response", response);
        setDashboardData(response.data);
      } catch (error) {
        console.log("🚀 ~ fetchDashboardData ~ error", error);
      }
    } else {
      try {
        const response = await getDashboardData();
        console.log("🚀 ~ fetchDashboardData ~ response", response);
        setDashboardData(response.data);
      } catch (error) {
        console.log("🚀 ~ fetchDashboardData ~ error", error);
      }
    }
  };

  useState(() => {
    fetchDashboardData();
  }, []);

  return (
    <AdminLayout title="Dashboard">
      <div className="row">
        {/* Earnings (Monthly) Card Example */}
        {role === "admin" && (
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Jumlah Siswa
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {dashboardData.total_user ?? 0}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Earnings (Monthly) Card Example */}
        {role === "admin" && (
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Jumlah Buku
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {dashboardData.total_book ?? 0}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-book fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Earnings (Monthly) Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Jumlah Peminjaman
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {dashboardData.transaction_borrowed ?? 0}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pending Requests Card Example */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Jumlah Pengembalian
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {dashboardData.transaction_returned ?? 0}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-comments fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default DashboardPage;
