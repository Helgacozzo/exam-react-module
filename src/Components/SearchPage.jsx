import React, { useState } from 'react';
import './SearchPage.scss'
import SearchBar from './SearchBar';
import PersonCard from './PersonCard';
const apiKey = import.meta.env.VITE_API_KEY;

export default function () {

    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState();

    const handleSearch = (searchValue) => {
        fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchValue}`)
            .then(response => response.json())
            .then(obj => setSearchResults(obj.results))
            .catch(error => {
                setError(`There was an error. Try again!`);
                console.error(error);
            });
    };

    return (

        <div>

            <h1>Cerca i tuoi attori!</h1>
            <SearchBar onSearch={handleSearch} />

            {error && <div>{error}</div>}

            {searchResults.length === 0 && !error && <p className='notFoundResults'>Nessun risultato trovato!</p>}

            {searchResults.length !== 0 && !error && (
                <div className="person-list">
                    {searchResults.map((person) => (
                        <PersonCard
                            key={person.id}
                            id={person.id}
                            name={person.name}
                            occupation={person.known_for_department}
                            sex={person.gender === 2 ? 'Male' : 'Female'}
                            popularity={person.popularity}
                            works={person.known_for.map((work) => work.title)}
                            imagePath={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                        />
                    ))}
                </div>
            )}

        </div>

    );

};
