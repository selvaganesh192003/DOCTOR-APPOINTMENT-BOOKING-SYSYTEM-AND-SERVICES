import API from "../services/Api";

// GET all patients
export const getPatients = () => API.get("patients/");

// ADD patient
export const addPatient = (data) => API.post("patients/", data);

// DELETE patient
export const deletePatient = (id) => API.delete(`patients/${id}/`);

// UPDATE patient
export const updatePatient = (id, data) =>
  API.put(`patients/${id}/`, data);