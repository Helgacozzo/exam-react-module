import React, { useState, useEffect } from 'react';
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;

export default function HomePage() {

    const [popularPeople, setPopularPeople] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
            .then(response => response.json())
            .then(obj => setPopularPeople(obj.results))
            .catch(error => {
                setError(`There was an error. Try again!`);
                console.error(error);
            });

    }, []);

    return (

        <div>

            <h1>Popular People</h1>

            {error && <div>{error}</div>}

            {!error && popularPeople.length === 0 && <div>Loading...</div>}

            {!error && popularPeople.length !== 0 && (
                <div className="person-list">
                    {popularPeople.map(person => (
                        <PersonCard
                            key={person.id}
                            id={person.id}
                            name={person.name}
                            occupation={person.known_for_department}
                            sex={person.gender === 2 ? 'Male' : 'Female'}
                            popularity={person.popularity}
                            works={person.known_for.map(work => work.title)}
                            imagePath={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                        />
                    ))}

                </div>

            )}

        </div>

    );

}
