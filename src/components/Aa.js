import React, {Component} from 'react'
import Bb from './Bb'
import Cc from './Cc'

const list =['dance','eat','jog']

class Aa extends Component {
    
    render() {
        return (
            <div>
               <Bb arr={list}/>
                <Cc />
                
            </div>
        )
    }
}


export default Aa