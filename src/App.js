import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import  Home  from './Pages/Home/Home'
import  Profile  from './Pages/Profile/Profile'


import './App.css'

import {Container} from './Components/index'
import { Header,Footer,} from './Sections/index'
const App = () => {
    return(
        <>
          <Router>
                <Header/>
                <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
                </Container>
                <Footer/>
          </Router>
        </>
    )
}
export default App