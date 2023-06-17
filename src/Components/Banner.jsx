import '../Styles/Banner.css'

// composant children pour le cas ou il y aurait plusieurs bannières 
//si le client souhaite modifier le site et ajouter plusieurs pages avec différentes bannières, cette configuration sera plus pratique.
function Banner({children}) { 
    return (
        <div>
            {children}
        </div>
    )
}

export default Banner