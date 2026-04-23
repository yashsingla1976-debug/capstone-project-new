import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Your appointments will appear here</p>
      </div>
    </>
  );
}

export default Dashboard;