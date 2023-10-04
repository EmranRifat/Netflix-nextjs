import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroStyles from '@/app/styles/herosection.module.css'
import styles from '@/app/styles/common.module.css'
import image1 from "/public/about1.svg"
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';
const HeroSection = ({title,imageUrl}) => {
    return (
        <>
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href="/movie">
                            <button >
                                Explore Movies
                            </button>
                        </Link>
                    </div>

                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="watching netflix" width={500} height={500}/>
                    </div>
                </div>
            </div>
           
        </main>    
        </>
    );
};

export default HeroSection;