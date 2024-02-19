import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import About from '../pages/About';
import Search from '../pages/Search';
import Home from '../pages/Home';
import Tools from '../pages/Tools';

function App(){
return(
    <section className='min-h-screen'>
    <BrowserRouter>
    <main>
    <nav className='ml-9 my-5 font-bold text-md'>
        <ul className='flex flex-row justify-start flex-nowrap gap-5'>
            <li><Link to='food-recipes/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/tools'>Tools</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
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