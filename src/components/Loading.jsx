import React from 'react';
import { LOADING_IMG_URL } from '../services/Constants';

export default function Loading() {
  return (
    <div className="loadingDiv">
      <img
        src={ LOADING_IMG_URL }
        alt="Loading"
      />
    </div>
  );
}
