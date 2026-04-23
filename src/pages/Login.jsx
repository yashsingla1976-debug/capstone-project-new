import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl mb-4">Login</h2>
          <input
            type="text"
            placeholder="Email"
            className="border p-2 w-full mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3"
          />
          <button className="bg-blue-500 text-white px-4 py-2 w-full">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;