'use client';
import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  height: '50vh', // Vertically centers in the viewport
};

const Spinner = ({ loading = true }) => {
  return (
    <div style={override}>
      <ClipLoader
        color={'#4A90E2'} // A soothing blue shade
        loading={loading}
        size={50} // Increased size for better visibility
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
