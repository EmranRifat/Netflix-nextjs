import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css"

const movie = async () => {

 const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en"
  

 const options = {
   method: 'GET',
   headers: {
     'X-RapidAPI-Key': '689fb8073emshe831d33ef1be31bp1938f8jsn5655cba19256',
     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
   }
 };
 const res= await fetch(url,options);
 const data=await res.json();
 const allData=data.titles;
  //  console.log(allData);
    return (
        
        <>
           <section className={styles.movieSection}>
            <div className={styles.container}>
            <h1>Movies all...</h1>
            {/* <Link href="movie/100" >
                    plz GOO
            </Link> */}
           <div className={styles.card_section}>
           {
              allData?.map((data)=>{
                return <MovieCard key={data.id} {...data}/>
              })
            }
           </div>
            </div>
           </section>
        </>
    );
};

export default movie;