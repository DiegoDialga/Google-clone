import {useState, useEffect} from 'react';
import { actionTypes } from '../reducer';
import { useStateValue} from '../StateProvider';
import './secondPage.css';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import ArticleIcon from '@mui/icons-material/Article';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchIcon from '@mui/icons-material/Search';

//paste api key that you can acquire from google engine here
const API_KEY = '';

//paste search engine id here
const SearchEngineId = '';


function SecondPage(){
    const [{term}, dispatch] = useStateValue();
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
    console.log(data)
    return(
        
        <div style={{width:'100vw'}}>
            <div className='mainBody'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'  alt='' />
                <div>
                <div className='searchBarDiv' style={{boxShadow:'0 2px 5px 1px rgb(64 60 67 / 16%)', border:'1px solid transparent'}}>
                    <form>
                        <input value={term} />    
                    </form>
               <div>  
                    <CloseIcon style={{marginTop:'9px', marginRight:'30px', color:'grey'}} />
                    <KeyboardVoiceIcon style={{marginTop:'9px', marginRight:'15px', color:'grey'}}/>
                    <SearchIcon style={{marginTop:'9px', marginRight:'15px', color:'grey'}}/></div>
                </div>
                <div className='optionsBelowInput' style={{display:'flex', justifyContent:'space-between', paddingTop:'20px'}}>
                        <a href='' style={{display:'flex', marginLeft: '30px', paddingRight:'20px'}}>
                            <SearchOutlinedIcon style={{display: 'block', height: '20px', width: '20px'}}/>
                            <p style={{fontSize:'14px'}}>All</p>
                        </a>
                        <a href='' style={{display:'flex', paddingRight:'25px'}}>
                            <CropOriginalIcon style={{display: 'block', height: '20px', width: '20px'}} />
                            <p style={{fontSize:'14px'}}>Images</p>
                        </a>
                        <a href='' style={{display:'flex', paddingRight:'30px'}}>
                            <ArticleIcon style={{display: 'block', height: '20px', width: '20px'}}/>
                            <p style={{fontSize:'14px'}}>News</p>
                        </a>
                        <a href='' style={{display:'flex', paddingRight:'20px'}}>
                            <SmartDisplayOutlinedIcon style={{display: 'block', height: '20px', width: '20px'}}/>
                            <p style={{fontSize:'14px'}}>Videos</p>
                        </a>
                        <a href='' style={{display:'flex', paddingRight: '20px'}}>
                            <FmdGoodOutlinedIcon style={{display: 'block', height: '20px', width: '20px'}}/>
                            <p style={{fontSize:'14px'}}>Maps</p>
                        </a>
                        <a href='' style={{display:'flex'}}>
                            <MoreVertIcon style={{display: 'block', height: '20px', width: '20px'}}/>
                            <p style={{fontSize:'14px'}}>More</p>
                        </a>
                    </div>
                    <div id="before-appbar" style={{width:'100vw', height:'0', border:'1px 0px solid grey'}}></div>
                </div>
            </div>

            <div className='searchResult'>
                        {
                            data?.items.map(items =>(
                                <div className='searchItems'>
                                <div style={{display:'flex'}}>
                                <p className='Url_P' style={{margin:0}}>{items.formattedUrl}</p>
                                <MoreVertIcon style={{ paddingLeft:'15px', height:'17px', width:'17px', paddingTop:'3px' }} color='grey'/>
                                </div>
                                <a href={items.link} target='_blank'>
                                <p style={{margin:0, padding:0, display:'inline-block', fontSize:'1.3rem', fontWeight:'450'}}>{items.title}</p>
                                </a>
                                <p className='snippet_P' style={{margin:0}}>{items.snippet}</p>
                                </div>
                            ))
                        }
            </div>
            
        </div>
    );
}

export default SecondPage;
