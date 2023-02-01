import '../styles/Footer.css'

import { useState } from 'react'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("attention 0 pas valide")
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionnés de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
            placeholder='Entrez votre mail'
            onChange={handleInput}
            value={inputValue}
            onBlur={handleBlur}
            />
            <button onClick={() => (inputValue)}>Valider</button>
		</footer>
	)
}

export default Footer