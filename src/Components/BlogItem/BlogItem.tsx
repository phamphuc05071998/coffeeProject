import React from 'react'
import CardImage from '../CardImage/CardImage'
import { Link } from 'react-router-dom'



interface prop {
  image: string,
  title: string
}
const Magazine:React.FC<prop> = ({image, title}) => {
  return (
  
        <div>
            <CardImage image={image} height='36rem' buttonText='Read the full Story'/>
            <div>
              <Link to={''}>{title}</Link>
            </div>
        </div>
   
  )
}

export default Magazine