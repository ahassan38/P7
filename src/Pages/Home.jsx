import React from 'react'
import Navbar from "../Layout/Navbar"


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
                <Cards />
            </Shaping>
            <Footer />
        </div>
    )
}

export default Home