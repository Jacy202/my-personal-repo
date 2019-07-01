import React from 'react'
import Cc from './Cc'
const Bb = (props)  => (
            <div>
                {props.arr.map(item => (<Cc listItem={item}/>))}
                
            </div>
        )



export default Bb