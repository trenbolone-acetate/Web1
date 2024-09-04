import React from 'react';

function Card({ smartphone }) {
  return (
    <div className="Card">
      <header className="Card-header">
        <h2>
          <i>{smartphone.name} </i> 
          by {smartphone.manufacturer}
        </h2>
        <h3>  
          ({smartphone.index + 1} of {smartphone.total})
        </h3>
        <img 
          src={smartphone.url} 
          alt={smartphone.alt}
          style={{ maxWidth: '150px'}}
        />
        <p>
          {smartphone.description}
        </p>
      </header>
    </div>
  );
}

export default Card;
