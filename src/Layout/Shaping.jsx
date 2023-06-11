import React from 'react'
import "../Styles/Shaping.css"

// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Shaping({children}) {
    return (
        <div className='shaping'>
            {children}
        </div>
    )
}

export default Shaping