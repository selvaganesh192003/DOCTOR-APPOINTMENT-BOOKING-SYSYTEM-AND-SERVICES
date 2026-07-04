import React, { useEffect, useState } from "react";

export default function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/patients/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Patients:", data);
        setPatients(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-xl font-bold mb-4">Patient List</h1>

      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}