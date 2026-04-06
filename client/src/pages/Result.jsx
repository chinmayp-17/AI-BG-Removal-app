import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import '../index.css';

const Result = () => {
  // Simulate loading for the background removed image
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="result-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <div className="result-container" style={{ width: '80%', maxWidth: '1200px', backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="result-images" style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '100%' }}>
          <div className="original-image" style={{ flex: 1, textAlign: 'center' }}>
            <h2>Original</h2>
            <img src={assets.image_w_bg} alt="Original" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>
          <div className="background-removed-image" style={{ flex: 1, textAlign: 'center' }}>
            <h2>Background Removed</h2>
            {loading ? (
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className="w-[80%] h-[80%] flex items-center justify-center">
                  <Loader />
                </div>
              </div>
            ) : (
              <img src={assets.image_wo_bg} alt="Result" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
            )}
          </div>
        </div>
        <div className="result-actions" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
          <Link to="/upload" className="action-button try-again hover-effect" style={{ padding: '10px 20px', border: '1px solid #ccc', borderRadius: '20px', textDecoration: 'none', color: '#000' }}>Try another image</Link>
          <button className="action-button download hover-effect" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '20px' }}>Download image</button>
        </div>
      </div>
    </div>
  );
};

export default Result