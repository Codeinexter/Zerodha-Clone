import { Link } from "react-router-dom";
function RightSection({imageURL, productName, productDescription, learnMore}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <Link to={learnMore} style={{textDecoration:"none"}}
                        >Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt="imageUrl"/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;