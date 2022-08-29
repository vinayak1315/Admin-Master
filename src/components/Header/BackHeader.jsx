import {Link} from 'react-router-dom'
import {FaAngleLeft} from 'react-icons/fa'
const HeadBack = ({title, backLink}) => {

    return (
        <div className="d-flex align-items-center">
            <div>
                <Link to={backLink} style={{ textDecoration: 'none' }}><FaAngleLeft className="cons_back mr-1" /></Link>
            </div>
            <div>Onboarding Complete</div>
        </div>
    )
}
export  {HeadBack}