import { Link } from 'react-router-dom';

export default function ({ id, name, occupation, sex, popularity, works, imagePath }) {

    return (


        <Link to={`person/${id}`}>

            <div className="person-card">

                <img src={imagePath} alt={name} className="person-image" />

                <div className="person-details">

                    <h2>{name}</h2>

                    <p><strong>Occupation:</strong>{occupation}</p>
                    <p><strong>Sex:</strong>{sex}</p>
                    <p><strong>Popularity:</strong>{popularity}</p>
                    <p><strong>Works:</strong>{works}</p>

                </div>

            </div>

        </Link>

    )

}