import React from 'react';

const RoomComponent = ({ room, onBookNow }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img src={room.image} alt={room.name} style={{ maxWidth: '200px' }} />
      <p>{room.name}</p>
      <button onClick={() => onBookNow(room)}>Book Now</button>
    </div>
  );
};

export default RoomComponent;
