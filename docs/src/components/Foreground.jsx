import React, { useRef, useState } from 'react'
import Cards from './Cards'


function Foreground() {
    const ref=useRef(null);
    
    const data=[
        {
        desc:"Pratik is a good boy",
        fileSize:"0.9mb",
        close:true,
        tag:{isOpen:true,tagTitle:"Download this",tagColor:"green",

        },
        
        
        
    },
    {
        desc:"Pratik is a good boy",
        fileSize:"0.9mb",
        close:true,
        tag:{isOpen:true,tagTitle:"Download this",tagColor:"green"},

        },
        {
            desc:"Pratik is a good boy",
            fileSize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Upload this",tagColor:"blue"},
    
            },

    ];
   
  return (
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Cards data={item} reference={ref} />
        ))}
        
    </div>
  )
}

export default Foreground
