import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Component/Navbar.css';

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [selectedCountry, setSelectedCountry] = useState(null); // State for selected country

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
        setCountry(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Filter the countries based on the search input
  const filteredCountries = country.filter((Data) =>
    Data.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (country) => {
    setSelectedCountry(country); // Set the clicked country to be the selected country
  };

  const handleBackClick = () => {
    setSelectedCountry(null); // Clear the selected country to go back to the list
  };

  return (
    <>
      {/* Input field for searching countries */}
      <div>
        <input
          id='input'
          type="text"
          placeholder="Search country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on user input
        />
      </div>

      {/* If a country is selected, show the detailed view */}
      {selectedCountry ? (
        <div id="detail-view">
          <button onClick={handleBackClick}>Back</button>
          <div id='count-card'>
            <img src={selectedCountry.flags.png} alt={`${selectedCountry.name.common} flag`} />
            <h2>{selectedCountry.name.common}</h2>
            <p>Population: {selectedCountry.population}</p>
            <p>Region: {selectedCountry.region}</p>
            <p>Capital: {selectedCountry.capital ? selectedCountry.capital[0] : "N/A"}</p>
          </div>
        </div>
      ) : (
        <div id="card-banner">
          {/* Display the filtered countries */}
          {filteredCountries.map((Data) => (
            <div
              id='count-card'
              key={Data.name.common}
              onClick={() => handleCardClick(Data)} // Handle card click to show details
              style={{ cursor: 'pointer' }} // Make it look clickable
            >
              <img src={Data.flags.png} alt={`${Data.name.common} flag`} />
              <h2>{Data.name.common}</h2>
              <p>Population: {Data.population}</p>
              <p>Region: {Data.region}</p>
              <p>Capital: {Data.capital ? Data.capital[0] : "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
