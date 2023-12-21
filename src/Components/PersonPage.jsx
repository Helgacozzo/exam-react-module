import React, { useState, useEffect } from 'react';
import './PersonPage.scss'
import { useParams } from 'react-router-dom'; 3
import dayjs from 'dayjs';
const apiKey = import.meta.env.VITE_API_KEY;

export default function () {

  const { id } = useParams();
  const [personData, setPersonData] = useState();
  const [error, setError] = useState();

  const fetchPersonData = () => {

    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => setPersonData(data))
      .catch(error => {
        setError('Nessun personaggio trovato.');
        console.error(error);
      });

  };

  useEffect(() => {
    fetchPersonData();
  }, [id]);

  return (

    <div>
      {error && <div>{error}</div>}

      {personData && (

        <div className='personBox'>
          <h1>{personData.name}</h1>
          <p><strong>Sesso:</strong> {personData.gender === 2 ? 'Maschio' : 'Femmina'}</p>
          {personData.birthday && (
            <p><strong>Età:</strong> {dayjs().diff(personData.birthday, 'year')}</p>
          )}
          <p><strong>Professione:</strong> {personData.known_for_department}</p>
          <p><strong>Biografia:</strong> {personData.biography}</p>
          {personData.profile_path && (
            <img src={`https://image.tmdb.org/t/p/w200${personData.profile_path}`} alt={personData.name} />
          )}
        </div>

      )}

    </div>
  );
};
