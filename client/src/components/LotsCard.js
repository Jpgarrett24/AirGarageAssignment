import React from 'react'

const LotsCard = ({ lot }) => {
    console.log(lot);

    return (
        <div>
            <h2>{lot.name}</h2>
            <h3>{lot.location.address1}, {lot.location.city}, {lot.location.state} {lot.location.zip_code}</h3>
            <img src={lot.image_url} alt={`${lot.name} parking lot`} />
            <p>{lot.finalScore} stars out of {lot.review_count} {lot.review_count > 1 ? 'reviews' : 'review'}</p>
            <a href={lot.url}>Yelp Link</a>
            <hr />
        </div>
    );
};

export default LotsCard;
