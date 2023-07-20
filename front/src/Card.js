import React, { useState } from 'react';

const Card = ({ technology, onClick, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedTechnology, setUpdatedTechnology] = useState({
    name: technology.name,
    image: technology.image,
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onEdit(technology.id, updatedTechnology);
    setEditMode(false);
  };

  const handleDelete = () => {
    onDelete(technology.id);
  };

  return (
    <div className="card" >
      {editMode ? (
        <div className="edit-form">
          <input
            type="text"
            value={updatedTechnology.name}
            onChange={(e) => setUpdatedTechnology({ ...updatedTechnology, name: e.target.value })}
          />
          <input
            type="text"
            value={updatedTechnology.image}
            onChange={(e) => setUpdatedTechnology({ ...updatedTechnology, image: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <div className="card-buttons">
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <img src={technology.image} alt={technology.name}  onClick={() => onClick(technology)} />
          <h3 onClick={() => onClick(technology)} >{technology.name}</h3>
        </>
      )}
    </div>
  );
};

export default Card;
