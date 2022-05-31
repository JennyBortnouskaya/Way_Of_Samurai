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

function App(props) {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route exact path='/profile'>
                        <ProfileContainer store={props.store}/>
                    </Route>
                    <Route exact path='/dialogs'>
                        <DialogsContainer store={props.store}/>
                    </Route>
                    <Route exact path='/news'>
                        <News/>
                    </Route>
                    <Route exact path='/music'>
                        <Music/>
                    </Route>

                </div>
                <FriendsBar/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
