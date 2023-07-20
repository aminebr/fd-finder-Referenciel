import React, { useState, useEffect } from 'react';
import api from './api';
import { Link,useParams } from 'react-router-dom';
import './SecondInterface.css'

const SecondInterface = () => {
  const [technologyData, setTechnologyData] = useState([]);
  const [newRow, setNewRow] = useState({
    field_name: '',
    path_string: '',
    type: '',
    alimentation: '',
    usages: '',
  });

  const { technologyName } = useParams();

  useEffect(() => {
    fetchTechnologyData();
  }, []);

  const fetchTechnologyData = async () => {
    try {
      const response = await api.get(`/api/technologies/${technologyName}`);
      setTechnologyData(response.data);
    } catch (error) {
      console.error('Error fetching technology data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleAddRow = async () => {
    try {
      await api.post(`/api/technologies/${technologyName}`, newRow);
      fetchTechnologyData();
      setNewRow({
        field_name: '',
        path_string: '',
        type: '',
        alimentation: '',
        usages: '',
      });
    } catch (error) {
      console.error('Error adding row:', error);
    }
  };

  const handleEditInputChange = (id, e) => {
    const { name, value } = e.target;
    setTechnologyData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
      )
    );
  };

  const handleEditRow = async (id, updatedRow) => {
    try {


      await api.put(`/api/technologies/${technologyName}/${id}`, updatedRow);
      fetchTechnologyData();
    } catch (error) {
      console.error('Error editing row:', error);
    }
  };

  const handleDeleteRow = async (id) => {
    try {
      await api.delete(`/api/technologies/${technologyName}/${id}`);
      fetchTechnologyData();
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  return (
    <div className="container">
      <h1>FD finder Technologie Referenciel for {technologyName}</h1>
      <Link to="/" className="link-back">Home</Link>
      <table>
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Path String</th>
            <th>Type</th>
            <th>Alimentation</th>
            <th>Usages</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {technologyData.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  name="field_name"
                  value={row.field_name}
                  onChange={(e) => handleEditInputChange(row.id, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="path_string"
                  value={row.path_string}
                  onChange={(e) => handleEditInputChange(row.id, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="type"
                  value={row.type}
                  onChange={(e) => handleEditInputChange(row.id, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="alimentation"
                  value={row.alimentation}
                  onChange={(e) => handleEditInputChange(row.id, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="usages"
                  value={row.usages}
                  onChange={(e) => handleEditInputChange(row.id, e)}
                />
              </td>
              <td>
                <button onClick={() => handleEditRow(row.id, row)}>Save</button>
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-row">
        <h2>Add New Row</h2>
        <input
          type="text"
          name="field_name"
          value={newRow.field_name}
          placeholder="Field Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="path_string"
          value={newRow.path_string}
          placeholder="Path String"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="type"
          value={newRow.type}
          placeholder="Type"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="alimentation"
          value={newRow.alimentation}
          placeholder="alimentation"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="usages"
          value={newRow.usages}
          placeholder="usages"
          onChange={handleInputChange}
        />
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    </div>
  );
};

export default SecondInterface;
