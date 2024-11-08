import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';
import bowl from './bowl-icon.png';

function App() {

const MY_ID = "a99efd18";
const MY_KEY = "4594db8aaae674f333b08b9510ca45e1";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('avocado');

useEffect(() => {
  const getRecipe = async () => {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data = await response.json();
    setMyRecipes(data.hits);
  }
  getRecipe()
},[wordSubmitted])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmitted(mySearch)
}

  return (
    <div className='App'>
      <div className='header'>
        <div className='header__appName'>
          <img className='header__img' src={bowl} alt='app icon' />
          <h1>Recipe Finder</h1>
        </div>
        <div className='header__input'>
        <button className='header__button' onClick={finalSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 26 26">
            <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
          </svg>
        </button>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        </div>
      </div>

        <div className='background'></div>

      <div className="recipes__container">
        {myRecipes.map((element , index) => (
          <MyRecipesComponent key={index}
          label={element.recipe.label} 
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredientLines={element.recipe.ingredientLines}
          recipeLink={element.recipe.url} />
        ))}
      </div>

      <div className="link">
        <a className="myInfo" href="https://yanaos-portfolio.glitch.me/" target="_blank">Developed by <span className="myName">YanaOS</span></a>
        <a className="myInfo" href="https://www.edamam.com/" target="_blank">Powered by www.edamam.com</a>
      </div>
    </div>
  );
}

export default App;
