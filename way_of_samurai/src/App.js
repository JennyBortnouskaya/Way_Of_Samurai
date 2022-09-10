import './App.css';
import Footer from './components/Footer/Footer';
import FriendsBar from './components/FriendsBar/FriendsBar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route exact path='/profile'>
                        <ProfileContainer/>
                    </Route>
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
