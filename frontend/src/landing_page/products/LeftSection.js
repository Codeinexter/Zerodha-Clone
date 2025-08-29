import { Link } from "react-router-dom";
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageURL} alt="imageUrl"/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link to={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true" ></i></Link>
                        <Link to={learnMore} style={{marginLeft:"70px", textDecoration:"none"}}
                        >Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                    <div className="mt-3">
                        <Link to={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="google"/></Link>
                        <Link to={appStore} style={{marginLeft:"20px"}}><img src="media/images/appstoreBadge.svg" alt="apple"/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;