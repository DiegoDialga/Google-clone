import {useState, useEffect} from 'react';
import { actionTypes } from '../reducer';
import { useStateValue} from '../StateProvider';
import './secondPage.css';


const API_KEY = 'AIzaSyDpbVaPPMHGJpp5J55Y6_t6OyEtN9zxfic';
const SearchEngineId = 'b43f3d9eb090d4aaa';


function SecondPage(){
    const [{term}, dispatch] = useStateValue();
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SearchEngineId}&q=${term}`
            ).then(res=>res.json()).then(result=>{
                setData(result)
            })
        }
        fetchData();
    }, [term])
    console.log(data)
    return(
        
        <div>
        <div className='mainBody'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' alt='' />
            <div>
                <form>
                    <input value={term} />
                    <button type='submit'/>
                </form>
            </div>
        </div>
        <div className='searchResult'>
                    {
                        data?.items.map(items =>(
                            <div className='searchItems'>
                            <p className='Url_P'>{items.formattedUrl}</p>
                            <a href={items.link} target='_blank'>
                                <h3>{items.title}</h3>
                            </a>
                            <p className='snippet_P'>{items.snippet}</p>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export default SecondPage;
