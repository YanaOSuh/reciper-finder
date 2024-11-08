import { useState } from 'react';
import arrow from './arrow.png';

function MyRecipesComponent({ label, image, calories, ingredientLines, recipeLink }) {
    const [show, setShow] = useState(false);
    const toggleIngredients = () => setShow(!show);
    
    return(
        <div className="recipe_box">
            <div className='recipe-image-box'>
                <img className='recipe-image' src={image} alt="dish" />
                <p className='recipe-calories'>{calories.toFixed()} cal</p>
            </div>
            <h2 className="recipe-name">{label}</h2>

            <button className='recipe-button btn-ingredients' onClick={toggleIngredients}>Ingredients</button>
            
            {show &&
            <ul className='recipe-list'>
                {ingredientLines.map((ingredient, index) => (
                    <li key={index}>
                        <img className='iconArrow' src={arrow} alt="arrow right" />
                    {ingredient}
                    </li>
                ))}
            </ul>
            }

            <button className='recipe-button btn-show' onClick={() => window.open(recipeLink)}>See Complete Recipe</button>

        </div>
    )
}

export default MyRecipesComponent;