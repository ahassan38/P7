import React, { useState, useRef } from 'react'
import chevron from "../Assets/Chevron.png"
import "../Styles/Collapse.css"



function Collapse({ title, content }) {
	/* Ceci définit l'état initial du collapse. */
	const [setActive, setActiveState] = useState('')
	/* Définit la hauteur initiale du collapse a 0px. */
	const [setHeight, setHeightState] = useState('0px')
	/* Définit l'état initial de la classe rotate*/
	const [setRotate, setRotateState] = useState('collapse-icon')

	/* Le paramètre contentCollapse à une réf Ceci est utilisé pour obtenir la hauteur du contenu. */
	const contentCollapse = useRef(null)

	/*  La fonction bascule le collapse en changeant l'état actif, l'état de hauteur et l'état de la rotation */
	const toggleCollapse = () => {
		setActiveState(setActive === '' ? 'active' : '')
		setHeightState(
			setActive === 'active'
				? '0px'
				: `${contentCollapse.current.scrollHeight}px`
		)
		setRotateState(
			setActive === 'active' ? 'collapse-icon' : 'collapse-icon rotate'
		)
	}

	/* C'est un moyen de vérifier si le contenu est un tableau ou non. Si ce n'est pas un tableau, il poussera le
       contenu dans contentArray. S'il s'agit d'un tableau, il bouclera dans celui-ci et poussera chaque élément dans
       le tableau de contenu. */
	const contentArray = []
	if (!Array.isArray(content)) {
		contentArray.push(content)
	} else {
		for (let i = 0; i < 9; i++) {
			contentArray.push(content[i])
		}
	}

	return (
		<div className="collapse-section">
			{/* bouton qui déclenche l'animation de déroulement du collapse. */}
			<button
				className={`collapse ${setActive}`}
				onClick={toggleCollapse}
			>
				<span className="collapse-title">{title}</span>
				<img src={chevron} className={`${setRotate}`} alt="" />
			</button>
			<div
				ref={contentCollapse}
				style={{ maxHeight: `${setHeight}` }}
				className="collapse-content"
			>
				<div className="collapse-text">
					{contentArray.map((content, index) => (
						<div key={`${content}-${index}`}>{content}</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Collapse