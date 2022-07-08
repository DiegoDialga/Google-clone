import {useState, useEffect} from 'react';
import {input} from './Home.js';


const SearchEngineId = '5e9a586ce1d07baf0';

const API_KEY = 'AIzaSyA_zErNauLorbG5dt8OGfJwx1uuyvSTJIA';

    const Search = (search) =>{
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async() =>{
            fetch(
                `https://www.googleapis.com/customesearch/v1?key=${API_KEY}&cx=${SearchEngineId}&q=${'elon musk'}`
            )
            .then(response => response.json())
            .then(result =>{setData(result)})}
        fetchData();
        
        }, [search])
        return data;
}

function SecondPage(){
    const [{search}, dispatch] = useState(input);
    const {data} = Search(search);
    return(
        <>
            {console.log(data)}
        </>
    );
}

export default SecondPage;