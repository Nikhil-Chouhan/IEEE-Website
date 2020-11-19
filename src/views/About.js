import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav';
import Grid from '@material-ui/core/Grid';
import AboutComponent from '../components/About/About';
import Carousel from '../components/About/Carousel';
import 'materialize-css/dist/css/materialize.min.css';
import First from '../components/About/First';


const About = () => {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="landingContent">
                    <div className="App">
                        <First/>
                        <AboutComponent/>
                        <div className=" slides title">
                            <h2>Technical Team</h2>
                            <Carousel />
                            <h2>Public Relations Team</h2>
                            <Carousel />
                            <h2>Digital Creatives Team</h2>
                            <Carousel />
                            <h2>Corporate Relations Team</h2>
                            <Carousel />
                        </div>
                    </div>
                    </Grid>
                    {/* <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation/>
                    </Grid> */}
                </Grid>
            </div>
        </div>
    )
}

export default About;