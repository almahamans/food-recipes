import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import About from './About';
import Search from './Search';
import Home from './Home'

function App(){
return(
    <section className='h-auto md:mb-[50%] sm:mb-[70%] lg:mb-[28%]'>
    <BrowserRouter>
    <main>
    <nav className='ml-9 my-5 font-bold text-md flex-nowrap'>
        <ul className='flex flex-row justify-start gap-5 '>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='./about'>About</Link></li>
        </ul>
    </nav>
    <Routes>
    <Route exact path='/' element={<Home/>} /> 
    <Route path='/search' element={<Search />} />
    <Route path='/about' element={<About />} />
    <Route render={()=><h1>404: page not found</h1>} />
    </Routes>
     
    </main>
    </BrowserRouter>
    </section>
)
}

export default App