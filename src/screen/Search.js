import '../style/App.css';
import { useEffect, useState } from 'react';
import Recipe from './recipe';
import '../style/Loading.css'

function Search() {
  const APP_ID = `4b719caf`; 
  const APP_KEY = `0687a6cf19f348c68f124a37555b5fa4	`;
   
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setLoading] = useState(false)


//edamam API
  useEffect(() => {
    setLoading(true)
    const debounce = setTimeout(() => {
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response => response.json())
    .then(data => {
      setLoading(false)
      setRecipes(data.hits)
    })
    }, 800)
    
    return () => clearTimeout(debounce)
  }, [search])


  const clearSearch = () => {
    setSearch('')
  }
  
  return(
  <div className="bg-white">
    <form  className='flex flex-col justify-center items-center relative'>
      <label htmlFor="food" className='mt-9 mb-4 font-lobester text-red-800 text-2xl md:text-md'>Type a food name or one ingredient:</label>
      <section className='flex flex-row'>    
      <input type="text" name="food" id ="food" autoComplete='no' value={search} onChange={(e) => setSearch(e.target.value)} className='rounded-md mb-3 mr-5 border-2 p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-64' />
      <button onClick={clearSearch} className='rounded-md bg-red-800 px-2 h-9 mt-1 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Clear</button>
      </section>
    </form> 
    {isLoading ? (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
      ) :
    (<section className='flex flex-row flex-wrap  w-auto justify-around'>       
      {
        recipes.map(rec => (
          <Recipe 
          key={rec.recipe.label}
          title={rec.recipe.label}
          cal={rec.recipe.calories}
          img={rec.recipe.image}
          ingredients={rec.recipe.ingredients} 
           />
        ))
        }
    </section>)
}
  </div>
  )
}

export default Search;
