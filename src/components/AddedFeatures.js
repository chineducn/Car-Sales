import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';
import * as actionCreators from '../state/actionCreators';

export function AddedFeatures(props) {
  const { addedFeatures, removeItem } = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {addedFeatures.length ? (
        <ol type="1">
          {addedFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} removeItem={removeItem} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators,
)(AddedFeatures);
