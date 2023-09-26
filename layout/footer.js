import Link from "next/link"


export default function Footer(){
    return (
        <footer className="pb-5 mb-5 pt-6 pt-md-7 bg-primary  border-light footer-layout">
            <div className="row justify-content-center">
                <div className="">
                    <Link href="#" target="_blank" className="m-1 btn btn-icon-only btn-pill btn-primary">
                        <span  className="fab fa-youtube"></span>
                    </Link>
                    <a href="https://github.com/OkamotoSatoshi/studybible" target="_blank" className="m-1 btn btn-icon-only btn-pill btn-primary" >
                        <span className="fab fa-github"></span>
                    </a>
                </div>
                <div className="col-12 m-3">
                    <a className="font-weight-normal font-small mb-0">Copyright © 一切荣耀归于
                        <b className="current-year">神</b>
                    </a>
                </div>
            </div>
        </footer>
    )
}