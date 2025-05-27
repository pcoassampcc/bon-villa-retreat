import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../ReservationSection.scss';

const ReservationSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [guests, setGuests] = useState(2);
  const [accommodation, setAccommodation] = useState('Cottage Rooms');

  return (
    <section className="section reservation-section" id="reservation">
      <div className="container">
        <h2>Book Your Stay</h2>
        <form className="reservation-form">
          <div className="form-group">
            <label htmlFor="date">Select Date</label>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              minDate={new Date()}
              className="form-input"
              id="date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              className="form-input"
              min={1}
              max={20}
              value={guests}
              onChange={e => setGuests(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="accommodation">Accommodation</label>
            <select
              id="accommodation"
              className="form-input"
              value={accommodation}
              onChange={e => setAccommodation(e.target.value)}
            >
              <option>Cottage Rooms</option>
              <option>Luxury Tents</option>
              <option>Dormitories</option>
            </select>
          </div>
          <button type="submit" className="btn">Request Booking</button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
