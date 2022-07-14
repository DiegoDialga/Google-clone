import {useState, useEffect} from 'react';
import {input} from './Home.js';


const SearchEngineId = '';

const API_KEY = '';//API key and search engine id are not in this code for security reasons

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
