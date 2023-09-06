import React, {useState} from 'react';
const FlashCard = (props) => {
    const [isQuestion, setIsQuestions] = useState(true);
    function handleClick() {
        setIsQuestions(prev => !prev)
    }

    let backgroundColor = ''
    if (props.difficulty === "easy") {
        backgroundColor = "#FF5733"
    } else if (props.difficulty === "medium") {
        backgroundColor = "#fdfd96"
    } else if (props.difficulty === "hard") {
        backgroundColor = "#ffc0cb"
    } else {
        backgroundColor = "#aec6cf"
    }

    return isQuestion ? (
        <div className="card" onClick={handleClick}>
            <style>
                {`
                .card {
                    color: black;
                    display: flex;
                    background-color: ${backgroundColor};
                    width: 500px;
                    height: 200px;
                    padding: 5%;
                    margin-left: auto;
                    margin-right: auto;
                    justify-content:center;
                }
                `}
            </style>
            <div className="content">
                <h2>{props.question}</h2>
            </div>
        </div>
    ) : (
        <div className="card" onClick={handleClick}>
            <style>
                {`
                .card {
                    color: black;
                    background-color: ${backgroundColor};
                    width: 500px;
                    height: 200px;
                    padding: 5%;
                    margin-left: auto;
                    margin-right: auto;
                }
                `}
            </style>
        <div className="content">
            <h2>{props.answer}</h2>
        </div>
    </div>

    )
}

export default FlashCard;