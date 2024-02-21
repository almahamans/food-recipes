import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import About from '../pages/About';
import Search from '../search/Search';
import Home from '../pages/Home';
import Tools from '../tools/Tools';

function App(){
return(
    <section className='min-h-screen'>
    <BrowserRouter>
    <main>
    <header className='ml-9 my-5 font-bold text-md flex flex-row justify-start flex-nowrap gap-5'>
            <span><Link to='food-recipes/'>Home</Link></span>
            <span><Link to='/search'>Search</Link></span>
            <span><Link to='/tools'>Tools</Link></span>
            <span><Link to='/about'>About</Link></span>
    </header>

    <Routes>
    <Route exact path='food-recipes/' element={<Home name='chef' />} /> 
    <Route path='/search' element={<Search />} />
    <Route path='/tools' element={<Tools name='chef' />} />
    <Route path='/about' element={<About />} />
    <Route render={()=><h1>404: page not found</h1>} />
    </Routes>
    </main>
    </BrowserRouter>
    </section>
)
}

export default App