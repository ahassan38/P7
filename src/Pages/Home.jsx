import React from 'react'
import Navbar from "../Layout/Navbar"
import Shaping from '../Layout/Shaping' // mise en forme 100px à droite & gauche
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"


import "../Styles/Home.css"

function Home() {
    return (
        <div role="main">
            <Shaping>
                <Navbar />
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
               
            </Shaping>
            <Footer />
        </div>
    )
}

export default Home