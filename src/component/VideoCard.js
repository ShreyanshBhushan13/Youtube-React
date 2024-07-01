import React from 'react'

const VideoCard = ({info}) => {
    //console.log("child",info);
     const { snippet, statistics }=info;
     const { channelTitle , title, thumbnails }=snippet;
   return (
    <div className='p-2 m-2 w-52 shadow-lg'>
 <img alt="thumbnails" src={thumbnails.high.url}></img>
  <ul>
     <li className='font-bold py-2'>{title}</li>
     <li>{ channelTitle }</li>
    <li>{statistics.viewCount}views</li>
      

 </ul>


    </div>
   )
  };

export default VideoCard;