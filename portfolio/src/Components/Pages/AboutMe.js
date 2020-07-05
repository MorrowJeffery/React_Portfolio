import React from 'react';
import '../../App.css';

function AboutMe() {
    const aboutMeText = "Hello, i'm Jeff and I am a web developer. I have programmed for the last couple " +
            "of years in several different languages and purposes. I have worked solo and wit" +
            "h others to create varius web apps. If you would like to see some of these proje" +
            "cts, head on over to the portfolio page or check out my github!"

    return (
        <div className="profile-content">
        <div className="row">
            <div className="col content-header ">
                <p>About Me</p>
                <hr/>
            </div>

        </div>
        <div className="row content-content">
            <div className="col">
                <p>
                    {aboutMeText}
                </p>
            </div>

        </div>

    </div>
    )
}

export default AboutMe;