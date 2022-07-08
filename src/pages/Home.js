import React, {useState} from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Home.css';
{/*
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
*/}


const input = ''
function Home() {
    const [input, setInput] = useState('');
    const history = useHistory();


    const search = e => {
        e.preventDefault();
        //console.log("shut");

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
                    {/*<AppsIcon />
                    <Avatar />*/}
                </div>
            </div>

            <div className='home_body'>
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="" />

            <div className="home_inputContainer">
                        <form className='search'>
                            <div className='search_input'>
                                {/* <SearchIcon className = "search_inputIcon"/>*/}
                                <input value={input} onChange={e => setInput(e.target.value)} />
                                {/*<Icon>*/}
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
export {input};
export default Home;
