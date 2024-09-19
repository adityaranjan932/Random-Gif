import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {
    const[tag,setTag] = useState('car')
    // const[gif,setGif] = useState('');
    // const [loading,setloading] = useState(false);
    
    // async function fetchData(){
    //     setloading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //    const {data} = await axios.get(url);
    //    const imageSource = data.data.images.downsized_large.url;
    //   setGif(imageSource); 
    //   setloading(false);
     
    // }
    // useEffect(()=>{
    //  fetchData();
    // },[])

    // function clickHandler(){
    //     fetchData()

    // }
    const {gif,loading,fetchData} = useGif();



  return (
    <div className='w-1/2  bg-blue-700 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl font-bold underline uppercase'>Random {tag} Gif</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" />}

        <input
        className='w-10/12 text-xl py-2 rounded-lg font-bold mb-[3px] text-center'
        onChange={(event)=> setTag(event.target.value)}
        value={tag}
        />

        <button onClick={()=>fetchData(tag)}
        className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]'
        >
            Generate
        </button>
    </div>
  )
}

export default Tag