import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [rooms, setRooms] = useState(0);
  const [guests, setGuests] = useState(0);
  const [isRoomHovered, setIsRoomHovered] = useState(true);
  const [isGuestHovered, setIsGuestHovered] = useState(false);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleRoomChange = (event) => {
    setRooms(parseInt(event.target.value));
  };

  const handleGuestChange = (event) => {
    setGuests(parseInt(event.target.value));
  };

  const handleRoomMouseEnter = () => {
    setIsRoomHovered(true);
  };

  const handleRoomMouseLeave = () => {
    setIsRoomHovered(false);
  };

  const handleGuestMouseEnter = () => {
    setIsGuestHovered(true);
  };

  const handleGuestMouseLeave = () => {
    setIsGuestHovered(false);
  };

  const handleSearch = () => {
    onSearch({
      searchText,
      checkInDate,
      checkOutDate,
      rooms,
      guests,
    });
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '15px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    width: '200px',
  };

  const hoverContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    padding: '5px',
    borderRadius: '5px',
    marginTop: '5px',
  };

  const hoverOptionStyle = {
    cursor: 'pointer',
    padding: '5px',
  };

  const buttonStyle = {
    padding: '5px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(56, 207, 25, 0.75)', // Semi-transparent green
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchTextChange}
        style={inputStyle}
      />
      <DatePicker
        selected={checkInDate}
        onChange={handleCheckInDateChange}
        placeholderText="Check-In"
        dateFormat="dd/MM/yyyy"
        style={inputStyle}
      />
      <DatePicker
        selected={checkOutDate}
        onChange={handleCheckOutDateChange}
        placeholderText="Check-Out"
        dateFormat="dd/MM/yyyy"
        style={inputStyle}
      />
      <div
        style={{ position: 'relative' }}
        onMouseEnter={handleRoomMouseEnter}
        onMouseLeave={handleRoomMouseLeave}
      >
        <input
          type="number"
          placeholder="Rooms"
          value={rooms}
          onChange={handleRoomChange}
          style={inputStyle}
        />
        {isRoomHovered && (
          <div style={hoverContentStyle}>
            <div style={hoverOptionStyle} onClick={() => setRooms(rooms + 1)}>
              Add Room
            </div>
            {rooms > 1 && (
              <div style={hoverOptionStyle} onClick={() => setRooms(rooms - 1)}>
                Delete Room
              </div>
            )}
          </div>
        )}
      </div>
      <div
        style={{ position: 'relative' }}
        onMouseEnter={handleGuestMouseEnter}
        onMouseLeave={handleGuestMouseLeave}
      >
        <input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={handleGuestChange}
          style={inputStyle}
        />
        {isGuestHovered && (
          <div style={hoverContentStyle}>
            <div style={hoverOptionStyle} onClick={() => setGuests(guests + 1)}>
              Add Guest
            </div>
            {guests > 1 && (
              <div style={hoverOptionStyle} onClick={() => setGuests(guests - 1)}>
                Remove Guest
              </div>
            )}
          </div>
        )}
      </div>
      <button onClick={handleSearch} style={buttonStyle}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
