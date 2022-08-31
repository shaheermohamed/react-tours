import React, { useState } from 'react';


const Tour = ({id,image,info,price,name}) => {
  const [readMore,setReadMore] = useState(false)
  return <article className='sinle-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>

        

      </div>
      <p>
       {
        readMore?info:`${info.substring(0,100)}`
       }...
       <button onClick={()=> setReadMore(!readMore)}>
        {readMore? 'show less': 'read more'}
       </button>
      </p>
      <button className='delete'> Not Interested</button>

    </footer>

  </article>
};

export default Tour;
