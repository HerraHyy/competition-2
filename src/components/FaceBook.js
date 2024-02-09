import React, { useState, useEffect } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(profiles);
  }, []);

  return (
    <div style={{
        border: '3px solid gray',
        display: 'flex',
        flexDirection: 'column',
    }}>
      {data.map((profile, index) => (
        <div key={index} style={{ 
            display: 'flex',
            border: '2px solid black',
            margin: '10px',
            height: '200px',
            padding: '10px',
            alignItems: 'center',
            backgroundColor: 'white' }}>
          <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} 
            style={{ 
            objectFit: 'fill',
            marginRight: '10px',
            /* border: '2px solid blue', */
            width: '200px',
            height: '200px',
            display: 'flex' }} />
            <div style={{
                /* border: '2px solid green', */
                display: 'flex',
                flexDirection: 'column',
                width: '600px',
                height: '200px',
                color:'black',
                lineHeight: '0.5',
                justifyContent: 'left',
                textAlign: 'left',
                fontSize: '20px',
                whiteSpace: 'normal',

            }}>
                <p style={{marginBottom:'0px', fontSize:'28px'}}><strong>First Name:</strong> {profile.firstName}</p>
                <p style={{marginBottom:'0px', fontSize:'28px'}}><strong>Last Name:</strong> {profile.lastName}</p>
                <p style={{marginBottom:'0px', fontSize:'28px'}}><strong>Country:</strong> {profile.country}</p>
                <p style={{marginBottom:'0px', fontSize:'28px'}}><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
          </div>

      ))}
    </div>
  );
};

export default FaceBook;