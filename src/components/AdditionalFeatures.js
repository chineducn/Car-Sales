import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import * as actionCreators from '../state/actionCreators';

export function AdditionalFeatures(props) {
  const { featuresStock, buyItem } = props;
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {featuresStock.length ? (
        <ol type="1">
          {featuresStock.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators,
)(AdditionalFeatures);
