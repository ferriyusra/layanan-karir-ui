import NotFound from '../../../src/img/notfound.png'
import { Link } from 'react-router-dom'


export default function SectionNotFound(){
    return (
        <section className="h-100 w-100" style={{boxSizing: 'border-box', backgroundColor: '#141432'}}>
    <div className="empty-2-3 container mx-auto d-flex align-items-center justify-content-center flex-column">    
        <img className="main-img img-fluid" src={NotFound} alt="error" />    
        <div className="text-center w-100">
            <h1 className="title-text text-white">Opss! Something Missing</h1>
            <p className="title-caption">
                The page you’re looking for isn’t found. We<br className="d-sm-block d-none" /> suggest you Back to Homepage.
            </p>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-back d-inline-flex text-white border-0" to="/">
                    Back to Homepage
                </Link>
            </div>
        </div>
    </div>
  </section> 
    )
}