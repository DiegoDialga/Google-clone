import {useState, useEffect} from 'react';
import { useStateValue} from '../StateProvider';
import Search from './search';
import './secondPage.css';

function SecondPage(){
    const [{term}, dispatch] = useStateValue();
    const {data} = Search(term);
    console.log(data)
    return(
        <div className='mainBody'>
            <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='' />
            <div><input title='Input' placeholder={term}/></div>
        </div>
    );
}

export default SecondPage;
