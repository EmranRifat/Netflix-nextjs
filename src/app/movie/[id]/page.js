import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
const page = async ({ params }) => {
  const id = params.id;

  // const url = `https://netflix54.p.rapidapi.com/search/?ids=${id}&lang=en`;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "689fb8073emshe831d33ef1be31bp1938f8jsn5655cba19256",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  console.log(main_data);

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        {" "}
        Netflix\ <span>{main_data.type}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={main_data.backgroundImage.url}
            alt="image"
            width={600}
            height={300}
          />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}{main_data.synopsisRegular}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
