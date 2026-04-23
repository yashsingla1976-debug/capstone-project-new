import Navbar from "../components/Navbar";
import DoctorCard from "../components/DoctorCard";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-12 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Healthcare Appointment System
        </h1>
        <p className="text-lg">
          Book your doctor appointments easily and quickly
        </p>
      </div>

      {/* Doctor Section */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Available Doctors
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <DoctorCard name="Dr. Sharma" specialty="Cardiologist" />
          <DoctorCard name="Dr. Mehta" specialty="Dermatologist" />
          <DoctorCard name="Dr. Verma" specialty="Neurologist" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © 2026 HealthCare+ | All Rights Reserved
      </footer>
    </div>
  );
}

export default Home;