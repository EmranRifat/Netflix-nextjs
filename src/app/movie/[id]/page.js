import React from 'react';

const page = ({params}) => {
    const id=params.id;
    
    const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en"
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '689fb8073emshe831d33ef1be31bp1938f8jsn5655cba19256',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };





    return (
        <div>
            <h1>i am dynamic site : {id}</h1>
        </div>
    );
};

export default page;