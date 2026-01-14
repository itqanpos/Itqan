import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>لوحة التحكم | Dashboard</h1>
      <p>مرحبًا: {user?.email}</p>

      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">العملاء</div>
        <div className="card">الخزنة</div>
        <div className="card">المخزون</div>
        <div className="card">المالية</div>
      </div>
    </div>
  );
};

export default Dashboard;
