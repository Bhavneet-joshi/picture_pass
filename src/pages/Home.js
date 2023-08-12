import React from 'react'

import Navigation from '../components/navbar/Navbar';
import Banner from '../components/carousel/Banner_carousel';
import CrouselTemplate from '../components/carousel/Carousel_template';

import Footter from '../components/fotter/Footer';
export default function Home() {
    return (
    <div className ='bg-gradient-to-l md:bg-gradient-to-r ' >
        
            <Navigation />
            <Banner />
            <CrouselTemplate url="discover/movie" heading="Recomended Videos" />
            <CrouselTemplate url="movie/upcoming" heading="Upcomings" />
            <CrouselTemplate url="discover/tv" heading="Tv Shows" type="tv" />
            <Footter />

           
    </div>
    )
}