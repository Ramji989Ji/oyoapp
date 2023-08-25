import React, { useState } from 'react';
import Navbar from '../Navbar';
import Drop from '../Drop';
import SearchBar from '../SearchBar';
import roomsData from '../roomData.json';
import RoomComponent from '../RoomComponent';
import Footer from '../Footer';
const Home = () => {
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  const handleSearch = (searchParams) => {
    const { searchText } = searchParams;

    if (searchText) {
      const filtered = roomsData.filter(room =>
        room.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRooms(filtered);
    } else {
      setFilteredRooms(roomsData);
    }
  };

  const handleBookNow = (selectedRoom) => {
    // Implement the booking process, e.g., showing a booking form, payment modal, etc.
    console.log('Booking room:', selectedRoom);
  };

  return (
    <div>
      <Navbar />
      <Drop />
      <SearchBar onSearch={handleSearch} />

      <div>
        <h2>Available Rooms</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredRooms.map((room) => (
            <RoomComponent
              key={room.id}
              room={room}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
      </div>
      
      <Footer /> 
    </div>
  );
};

export default Home;
