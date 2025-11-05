import React from 'react'
import {Bookmark} from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
          <img src="props.obj.brandLogo" alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>{props.obj.company} <span>{props.obj.datePosted}</span></h3>
          <h2>{props.obj.post}</h2>
          <div className='tag'>
            <h4>{props.obj.tag1}</h4>
            <h4>{props.obj.tag2}</h4>
          </div>

        </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.obj.pay}</h3>
            <p>{props.obj.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card