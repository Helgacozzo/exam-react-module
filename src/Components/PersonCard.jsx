export default function ({ id, name, occupation, sex, popularity, works, imagePath }) {

    return (

        <>

            <div className="person-card">

                <img src={imagePath} alt={`${name} thumbnail`} className="person-image" />

                <div className="person-details">

                    <h2>{name}</h2>

                    <p><strong>Occupation:</strong>{occupation}</p>
                    <p><strong>Sex:</strong>{sex}</p>
                    <p><strong>Popularity:</strong>{popularity}</p>
                    <p><strong>Works:</strong>{works}</p>

                </div>

            </div>

        </>

    )

}