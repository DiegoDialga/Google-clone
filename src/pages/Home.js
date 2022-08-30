import React, {useEffect, useState} from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './Home.css';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function Home() {
    const [input, setInput] = useState('');
    const history = useHistory();
    const [{term}, dispatch] = useStateValue();
    const [windowWidth, setWindowWith] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', ()=>{setWindowWith(window.innerWidth)})
        console.log(window.innerWidth)
    })

    const search = e => {
        e.preventDefault();
        //console.log("shut");
        dispatch({
            type: actionTypes.SET_INPUT,
            term: input
        })

        history.push('/search');
    }
    console.log(input)
    return (
        
        <BrowserRouter>
        <div className='home'>

            <div className='header' style={{display:'flex', flex:'0.05', alignItems:'center'}}>
                    <div style={{marginBottom:'6px'}}>
                    <a href='https://www.gmail.com'>Gmail</a>
                    <a href='https://www.google.co.in/imghp?hl=en&ogbl'>Images</a></div>
                    <a href=''><AppsIcon /></a>
                    <Avatar src="https://cdn.worldvectorlogo.com/logos/react-1.svg" sx={{height:'30px', width:'30px'}}/>
                  
            </div>

            <div className='body' style={{display:'flex', flex:'0.8', alignItems:'center'}}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                    width={windowWidth / 2}
                    alt="" />

            <div className="inputDiv">
                        <form className='search'>
                            <div className='search_input'>
                                <SearchIcon style={{color:'#9aa0a6'}}/>
                                <input value={input} onChange={e => setInput(e.target.value)} />
                                <MicIcon style={{}}/>
                            </div>

                            <div className='search_buttons'>
                                <Button type='submit' onClick={input?search : null}>Google Search</Button>
                                <Button onClick={null}>I'm Feeling Lucky</Button>
                            </div>
                        </form>
                </div>
            </div>
            <div style={{display:'flex', flex:'0.15', backgroundColor:'rgb(243 246 252)', flexDirection:'column'}} >
                <div style={{marginLeft:'25px', paddingTop:'10px', display:'flex', justifyContent:'flex-start'}}>
                    <p style={{color:'#70757a'}}>India</p>
                </div> 
                <div className='footer2ndOption' style={{display:'flex'}}>
                    <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                        About
                    </a>
                    <a href='https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>
                        Advertising
                    </a>
                    <a href='https://www.google.com/intl/en_in/business/'>Business</a>
                    <a href='https://www.google.com/search/howsearchworks/?fg=1'>How Search works</a>
                </div>

            </div>
        </div>
        </BrowserRouter>
    );
}
export default Home;
