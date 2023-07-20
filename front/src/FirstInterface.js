import React, { useState, useEffect } from 'react';
import api from './api'
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './FirstInterface.css';

const FirstInterface = () => {
  const [technologies, setTechnologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    try {
      const response = await api.get('/api/technologies');
      setTechnologies(response.data);
    } catch (error) {
      console.error('Error fetching technologies:', error);
    }
  };

  const handleCardClick = (technology) => {
    console.log("aaa")
    navigate(`/second-interface/${technology.name}`);
  };

  const handleEditCard = async (technologyId, updatedTechnology) => {
    try {
      await api.put(`/api/technologies/${technologyId}`, updatedTechnology);
      // Fetch the updated technologies from the backend
      fetchTechnologies();
    } catch (error) {
      console.error('Error editing technology:', error);
    }
  };

  const handleDeleteCard = async (technologyId) => {
    try {
      await api.delete(`/api/technologies/${technologyId}`);
      setTechnologies(technologies.filter((tech) => tech.id !== technologyId));
    } catch (error) {
      console.error('Error deleting technology:', error);
    }
  };

  const handleAddCard = async () => {
    const technologyName = window.prompt('Enter the Technology Name:');
    const imageUrl = window.prompt('Enter the Image URL:');

    if (technologyName && imageUrl) {
      try {
        const newTechnology = { name: technologyName, image: imageUrl };
        const response = await api.post('/api/technologies', newTechnology);
        setTechnologies([...technologies, response.data]);
      } catch (error) {
        console.error('Error adding technology:', error);
      }
    }
  };

  return (
    <div>
      <h1>FD finder Technologies</h1>
      <button onClick={handleAddCard}>Add New Card</button>
      <div className="card-container">
        {technologies.map((tech) => (
          <Card
            key={tech.id}
            technology={tech}
            onClick={handleCardClick}
            onEdit={handleEditCard}
            onDelete={handleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstInterface;
