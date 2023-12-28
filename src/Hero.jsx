import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { NavLink, Link } from "react-router-dom";
import './index.css'


function Hero() {


    const [data, setData] = useState('');
    const [print, setPrint] = useState(false);
    const [show, setShow] = useState(false);
    let videoRef = useRef();
    let audioRef = useRef();
    let bkcRef = useRef();
    let majakRef = useRef();

    var regex=/^[0-9]+$/;

    function getData(e){
      var cData = e.target.value;
      setData(cData)
  }

  let dataArr = String(data).split("").map((data) =>{
    return Number(data)
  })

  console.log(dataArr)

  let sum = 0;
  for (let i =0; i < dataArr.length; i++ ){
    sum += dataArr[i];
  }

  console.log(sum)

  function handleClick(){
      setPrint(true);
      if(data.length === 0 || data === " "){
        bkcRef.current.play();
      }

      else if(sum === 7 || data.length === 7 || data == 7 || data === "VII" || data === "seven" || data === "sat" || data === "saat" ){
        setShow(true)
        videoRef.current.play();
      }
      else if(data.length > 10){
        setShow(true)
        majakRef.current.play();
      }
      else{
        audioRef.current.play();
      }
      
  }

  function clearClick(){
    setData('');
    setShow(false);
    window.location.reload(false);
  }

  return (
    <div className='h-[100vh] w-[100%] bg-slate-900 flex justify-center  items-center'>
        <div className='flex  flex-col justify-center w-[400px]  max-w[500px] md:w[500px]  bg-sky-900 rounded-lg p-10  h-[80%] items-center'>

        {
          show == true && data.length > 10 ? <video className='mt-5'  ref={majakRef} width="300" height="320" autoPlay="autoplay">
          <source  src="/Videos/majak.mp4" type="video/mp4" />
          </video>
          :
          ""
        }

        <div className='flex w-[100%] mt-5'>
          <input type="text" placeholder='Enter a value or name'   value={data} className=' outline-none pl-8 bg-slate-300 h-14 w-[330px] md:w-[400px] rounded-lg  text-2xl '  onChange={getData}/>
        </div>

        {
          show == true && data.length <= 10  ? <video className='mt-5'  ref={videoRef} width="310" height="320" autoPlay="autoplay">
          <source  src="/Videos/thala.mp4" type="video/mp4" />
          </video>
          :
          ""
        }

        

        <audio ref={audioRef}  >
          <source src='/Music/moye-moye.mp3' />
        </audio>

        <audio ref={bkcRef}  >
          <source src='/Music/bkc.mp3' />
        </audio>
        


        {
          print == true && !data.match(regex) ? <div className='text-wrap flex w-[80%] h-auto items-center justify-center'> <h1 className=' text-white mt-5 text-2xl text-wrap'>{ data.split('').join(" + ") + " = " + data.length} </h1> </div> 
          : print == true && data.match(regex) ? <div className='text-wrap flex w-[80%] h-auto items-center justify-center'> <h1 className=' text-white mt-5 text-2xl text-wrap'>{ data.split('').join(" + ") + " = " + sum} </h1> </div> : ""
        }
        
        
        <div className='flex mt-4'>
          <button className='p-4 bg-yellow-300 rounded-lg mr-5 md:w-36 w-30' onClick={handleClick}> Check for thala</button>
          <button className='p-4 bg-yellow-200 rounded-lg md:w-36 w-30 text-lg' onClick={clearClick}><i className="fi fi-br-rotate-right mr-2 text-sm"></i> Reload </button>

        </div>

        <div className='flex  items-center text-xl text-amber-500 mt-10 '>
          <h2 className='mr-5'>Made by Amit </h2>
          <h2 className='mr-5 font-bold '> | </h2>
          <a href="https://www.instagram.com/itz_amit10/" target='_blank' className='mr-5 mt-2 text-3xl'><i className="fi fi-brands-instagram"></i></a>
        </div>
        

        </div>
        

    </div>
  )
}

export default Hero;