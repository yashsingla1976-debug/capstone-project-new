function DoctorCard({ name, specialty }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition">
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      
      <p className="text-gray-600 mb-2">{specialty}</p>
      
      <p className="text-yellow-500 mb-3">⭐ 4.5</p>

      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;