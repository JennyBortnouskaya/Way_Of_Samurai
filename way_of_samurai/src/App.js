import './App.css';
import Footer from './components/Footer/Footer';
import FriendsBar from './components/FriendsBar/FriendsBar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route exact path='/profile'>
                        <Profile posts={props.state.profileReducer.posts} dispatch={props.dispatch}/>
                    </Route>
                    <Route exact path='/dialogs'>
                        <Dialogs dialogs={props.state.dialogReducer.dialogs} dispatch={props.dispatch}/>
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
