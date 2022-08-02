import React, {useState} from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Home.css';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Home() {
    const [input, setInput] = useState('');
    const history = useHistory();
    const [{}, dispatch] = useStateValue();


    const search = e => {
        e.preventDefault();
        //console.log("shut");
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    }
    console.log(input)
    return (
        
        <BrowserRouter>
        <div className='home'>

            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home_headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                </div>
            </div>

            <div className='home_body'>
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="" />

            <div className="home_inputContainer">
                        <form className='search'>
                            <div className='search_input'>
                                <input value={input} onChange={e => setInput(e.target.value)} />
                            </div>

                            <div className='search_buttons'>
                                <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                                <Button variant='outlined'>I'm Feeling Lucky</Button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default Home;
