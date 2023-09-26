import Link from "next/link"

export default function Header(){
   
    return (
        <header className="header-global">
            <nav id="navbar-main" aria-label="Primary navigation" className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary">
                <div className="container position-relative">
                    <Link className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4" href="/">
                        <img className="navbar-brand-dark" src="/dark.svg" alt="Logo light" />
                        <img className="navbar-brand-light" src="/dark.svg" alt="Logo dark" />
                    </Link>
                    <div className="navbar-collapse collapse col-8" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/" className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                                        <img src="/dark.svg" alt="Themesberg logo" />
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <a href="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></a>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                            <li className="nav-item">
                                <a href="/" className="nav-link" >
                                    <span className="nav-link-inner-text">首页</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/family" className="nav-link" >
                                    <span className="nav-link-inner-text">家族谱</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        {/* <a href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/" target="_blank" className="btn btn-primary"><i className="fas fa-book"></i> Docs v1.0</a> */}
                        <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}