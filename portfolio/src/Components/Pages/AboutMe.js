import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

function AboutMe() {
    const backgroundtext = "I am a coffee drinking, pizza eating, tech loving developer from a family of eng" +
            "ineers. I starting playing with computers from a young age and I have always bee" +
            "n facinated by them. There is something magical about the idea that everything w" +
            "e see and do on a computer screen, is basically the result of an enormous amount" +
            " of on/off switches. I didn't know what I wanted to do until college, but I knew" +
            " I wanted to work with computers. I started off studying computer science in gen" +
            "eral, but once I stumbled upon web development, I knew what I wanted to do. I ha" +
            "ve never been much of an artistic person (seriously--never ask me to draw anythi" +
            "ng), but web development became my one place to explore my creative side. ";
    const whatiknowtext = "I started learning to develop by learning the basics- HTML, CSS, and Javascript" +
            ". While I learned you can do so much just mastering these, I also discovered tha" +
            "t there are a ton of things you can learn to make production quicker and easier." +
            " Some things I have learned so far are: React/Redux, Express, Jquery, Bootstra" +
            "p, Express, Node, and Git. However I am and will be constantly learning new thin" +
            "gs. ";
    const whyhiremetext = "Okay, so now you know a little about me and what I know. The real question is wh" +
            "y would you want to hire or work with me? The reason you won't want to let me" +
            " get away is my work ethics. I take work very seriously (in a good way) and I ta" +
            "ke a lot of pride in what I do. I get my work done quickly and effectivly. I tak" +
            "e it upon myself to learn everything I can to be useful/helpful even if it is so" +
            "mething that isn't my direct responsibility. Not enough to give me a chance? The" +
            "n hire me for my passion to make the web a more beautiful and accessible place. ";

    return (
        <div className="profile-content">
            <div className="row">
                <div className="col">
                    <h1 className="content-header">About Me</h1>
                    <hr/>
                </div>
            </div>
            <div className="row content-content">
                <div className="col">
                    <p className="aboutmebackground bold">Background</p>
                    <p className="aboutmebackground contentspace">
                        {backgroundtext}
                    </p>
                    <p className="aboutmewhatiknow bold headerspace">What I Know</p>
                    <p className="aboutmewhatiknow contentspace">
                        {whatiknowtext}
                        <span>
                            Think there is something I should learn or that you wish I knew?
                            <Link className="bold" to="/contact">
                                {" "}
                                Let me know here!</Link>
                        </span>
                    </p>
                    <p className="aboutmewhyhire bold headerspace">Why hire me?</p>
                    <p className="aboutmewhyhire contentspace endheader">
                        {whyhiremetext}
                        <span>
                            Want more than just my word?
                            <Link className="bold" to="/contact">
                                {" "}
                                Contact me {" "}
                            </Link>
                            and I would be happy to provide a list of references. Also feel 
                            free to check out some of my work {" "}
                            <Link className="bold" to="/portfolio">
                                Here
                            </Link>
                            .

                        </span>

                    </p>

                </div>

            </div>

        </div>
    )
}

export default AboutMe;