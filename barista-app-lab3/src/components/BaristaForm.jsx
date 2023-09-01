import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoice";
import drinksJson from "./drinks.json"
import './baristaForm.css'
const BaristaForm = () => {
    const drinksArr = drinksJson.drinks
    const [drink, setDrink] = useState('')
    const [recipe, setRecipe] = useState({})
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '' });

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
      
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
      
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
      
        'blended': ['yes', 'turbo', 'no']
    }

    const getNewDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setDrink(drinksArr[randomDrinkIndex].name);
        setRecipe(drinksArr[randomDrinkIndex].ingredients)
    }

    const onCheckAnswer = () => {
        if (recipe.temp != inputs["temperature"]) {
            setCheckedTemperature('Wrong')
        } else {
            setCheckedTemperature('Correct')
        }

        if (recipe.syrup != inputs["syrup"]) {
            setCheckedSyrup('Wrong')
        } else {
            setCheckedSyrup('Correct')
        }

        if (recipe.milk != inputs["milk"]) {
            setCheckedMilk('Wrong')
        } else {
            setCheckedMilk('Correct')
        }

        if (recipe.blended != inputs["blended"]) {
            setCheckedBlended('Wrong')
        } else {
            setCheckedBlended('Correct')
        }

    }
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
        getNewDrink();
    }

    return(
        <div> 
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{drink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>
            <form className="container">
                <div className="mini-container">
                    <h3>Temperature</h3>
                        <div className="answer-space" id={correct_temp}>
                            {inputs["temperature"]} 
                        </div>
                        <RecipeChoices
                            handleChange={(e) => setInputs((prevState) => ({
                                        ...prevState,
                                        [e.target.name]: e.target.value,
                                    }))}
                            label="temperature"
                            choices={ingredients["temperature"]}
                            checked={inputs["temperature"]}
                        />
                </div>

                <div className="mini-container">
                    <h3> Syrup </h3>
                        <div className="answer-space" id={correct_syrup}>
                            {inputs["syrup"]} 
                        </div>
                        <RecipeChoices
                            handleChange={(e) => setInputs((prevState) => ({
                                        ...prevState,
                                        [e.target.name]: e.target.value,
                                    }))}
                            label="syrup"
                            choices={ingredients["syrup"]}
                            checked={inputs["syrup"]}
                        />
                </div>
                
                <div className="mini-container">
                    <h3> Milk </h3>
                        <div className="answer-space" id={correct_milk}>
                            {inputs["milk"]} 
                        </div>
                        <RecipeChoices
                            handleChange={(e) => setInputs((prevState) => ({
                                        ...prevState,
                                        [e.target.name]: e.target.value,
                                    }))}
                            label="syrup"
                            choices={ingredients["milk"]}
                            checked={inputs["milk"]}
                        />
                </div>
                <div className="mini-container">
                    <h3> Blended </h3>
                        <div className="answer-space" id={correct_blended} >
                            {inputs["blended"]} 
                        </div>
                        <RecipeChoices
                            handleChange={(e) => setInputs((prevState) => ({
                                        ...prevState,
                                        [e.target.name]: e.target.value,
                                    }))}
                            label="syrup"
                            choices={ingredients["blended"]}
                            checked={inputs["blended"]}
                        />
                </div>
            </form>
            <button 
                type="submit" 
                className="button submit"
                onClick={onCheckAnswer}
            >
                Check Answer
            </button>
            <button
                type="new-drink-button"
                className="button newdrink"
                onClick={onNewDrink}
            >
                New Drink
            </button>
        </div>
    )
}

export default BaristaForm;