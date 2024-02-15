
import '../style/App.css';

function Recipe({title, cal, img, ingredients}){
return(
    <section className="mx-9 mt-9 p-3 w-80 min-h-[15vh] bg-inheret text-black rounded-lg flex flex-col justify-around flex-wrap font-sans shadow-lg shadow-current-300/40">
        <h1 className='font-semibold'><span className='text-red-800 underline'>Title:</span> {title}</h1>
        <p className='text-red-800'>ingredients:</p>
        <ol className='list-disc ml-4'>
            {ingredients.map(ing => (
                <li>{ing.text}</li>
            ))}
        </ol>
        <p className='mb-2'><span className='text-red-800'>Calories:</span> {cal}</p>
        <img src={img} alt="Food Image" className='contrast-100 hover:size-56 rounded lg:size-44 md:size-36 sm:size-36 mx-auto'/>
    </section>
)
}
export default Recipe;