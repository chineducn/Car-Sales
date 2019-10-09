import React from 'react';

const AdditionalFeature = props => {
  const { feature, addFeature } = props;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={e => addFeature(feature)}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
