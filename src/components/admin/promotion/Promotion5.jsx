import React from 'react'
import Header from '../Header'
import { Garages } from './PromotionComp'
const Promotion5 = () => {
    return (
        <>
            <Header title={<Garages />} />
            <div className="garage_1">
                <div className="d-flex">
                    <div><b style={{color:"#2650D8", fontSize:"20px"}}>All Garages (12)</b></div>
                    <div><button>SAVE</button></div>
                </div>
            </div>
        </>
    )
}

export default Promotion5