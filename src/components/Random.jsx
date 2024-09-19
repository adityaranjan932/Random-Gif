import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {

    const {gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2  bg-blue-700 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl font-bold underline uppercase'>A Random Gif</h1>
        {loading ? <Spinner /> : <img src={gif} width="450" />}
        <button onClick={()=> fetchData()}
        className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]'
        >
            Generate
        </button>
    </div>
  )
}

export default Random