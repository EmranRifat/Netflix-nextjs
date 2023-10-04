import Link from 'next/link';
import React from 'react';

const movie = async () => {

 const url = process.env.RAPID_KEY;
  

 const options = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key': '689fb8073emshe831d33ef1be31bp1938f8jsn5655cba19256',
     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
   }
 };
 const res=await fetch(url,options);
 const data=await res.json();
 console.log(data);
   
    return (
        
        <div>
            <h1>Movies all...</h1>
            <Link href="movie/100" >
                    plz GOO
            </Link>
        </div>
    );
};

export default movie;