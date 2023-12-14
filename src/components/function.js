import '../assets/style/navbar.css'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function Home()
{
    return(
        <div>
            <h1>Home Page</h1>
            <h1>Login Page</h1>
            <h1>Register Page</h1>
        </div>
    )
}

function Navbar()
{
    return(
        <Router>
            <nav>
                <ul>
                    <li class="active">
                        <Link to="/" className='Link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/" className='Link'>Login</Link>
                    </li>
                    <li>
                        <Link to="/" className='Link'>Register</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Login' element={<Login />} />
                <Route exact path='/Register' element={<Register />} />
            </Routes>
        </Router>
    )
}
export default Home;
