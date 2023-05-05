import './App.css';
import Footer from './components/Footer/Footer';
import FriendsBar from './components/FriendsBar/FriendsBar';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>

                    <Route exact path='/dialogs'>
                        <DialogsContainer/>
                    </Route>
                    <Route exact path='/news'>
                        <News/>
                    </Route>
                    <Route exact path='/music'>
                        <Music/>
                    </Route>
                    <Route exact path='/users'>
                        <UsersContainer/>
                    </Route>

                </div>
                <FriendsBar/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
