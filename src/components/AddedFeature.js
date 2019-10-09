import React from 'react';

const AddedFeature = props => {
  const { feature, removeItem } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={e => removeItem(feature)}>Remove</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
