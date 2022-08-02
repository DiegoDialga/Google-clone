import {useState, useEffect} from 'react';

const API_KEY = 'AIzaSyDpbVaPPMHGJpp5J55Y6_t6OyEtN9zxfic';
const SearchEngineId = 'b43f3d9eb090d4aaa';

function Search(term){
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SearchEngineId}&q=${term}`
            ).then(response=>response.json()).then(result=>{
                setData(result)
            })
        }
        fetchData();
    }, [term])
    return {data}
};

export default Search;