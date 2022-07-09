import { Navigation } from "./Navigation"

export const Header = (props) => {

    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                            <div className="center-desk">
                                <div className="logo">
                                    <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Navigation />

                </div>
            </div>
        </div>
    )
}