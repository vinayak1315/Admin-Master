import {FaAngleLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ReviewTitle = () => {
    return (
      <>
        <div className="d-flex align-items-center">
          <div>
            <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
          </div>
          <div style={{color:"#00155A", fontSize:"20px"}}>Add Rating & Review</div>
        </div>
      </>
    )
  }

  const Garages = () => {
    return (
      <>
        <div className="d-flex align-items-center">
          <div>
            <Link to="/promotion/ratings" style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
          </div>
          <div style={{color:"#00155A", fontSize:"20px"}}>Popular Garages</div>
        </div>
      </>
    )
  } 
  export {Garages,ReviewTitle}