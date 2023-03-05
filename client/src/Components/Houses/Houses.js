import React from 'react'
import HousesCard from './HousesCard';

const Houses = ({houses}) => {
    const displayCards = houses.map((houses) => (
        <HousesCard
          key={houses.id}
          houses={houses}
        />
      ));
  return (
    <>
      <div className="container">
        <div className='container-fluid backdrop'>
        <h2>Residential Areas</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          {displayCards}
        </div>
      </div>
    </>
  );
};

export default Houses;
