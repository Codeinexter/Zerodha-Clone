
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
            <a class="navbar-brand" href="/">
                <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <form class="d-flex" role="search">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Signup</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Support</a>
                    </li>
                </ul>
                </form>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;