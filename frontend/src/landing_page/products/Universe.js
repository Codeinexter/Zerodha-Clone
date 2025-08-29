function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo"/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" alt="streakLogo" style={{width:"32%"}}/>
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" style={{width:"45%"}}/>
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" style={{width:"37%"}} alt="zerodhaFundhouse"/>
                    <p className="text-small text-muted">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" alt="dittoLogo" style={{width:"30%"}}/>
                    <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/goldenpiLogo.png" alt="goldenpiLogo"/>
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>
                <button className="p-1 btn btn-primary fs-5" style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;