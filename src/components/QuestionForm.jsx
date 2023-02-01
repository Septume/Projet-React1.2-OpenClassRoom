import { useState } from 'react'

function QuestionForum() {
    const [inputValue, setInputValue] = useState('message d\'alerte')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForum