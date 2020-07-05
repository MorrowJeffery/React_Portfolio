import React from 'react';
import '../../App.css';

function getProjs() {
    return ([
        {
            projName: "Trivial Calendar",
            projLink: "https://morrowjeffery.github.io/Trivial-Calendar/",
            projPic: "TrivialCalendarApp",
            projDesc: "This is a calendar that will tell you the temperature for the day selected as we" +
                    "ll as a fun fact about that day",
            key: 1
        }, {
            projName: "On Ice",
            projLink: "https://intense-falls-96725.herokuapp.com/",
            projPic: "onIceApp",
            projDesc: "This is an app that facilitates lessons with users and their coaches/instructors" +
                    " by allowing users to reserve time slots",
            key: 1
        }, {
            projName: "Burger Solutions",
            projLink: "https://aqueous-mountain-03618.herokuapp.com/",
            projPic: "burgerApp",
            projDesc: 'This is a super simple app that allows users to "Create" burgers they can then e' +
                    'at. Just for fun.',
            key: 2
        }, {
            projName: "Date Night",
            projLink: "https://date-night-app-v1.herokuapp.com/",
            projPic: "DateNightlogo",
            projDesc: 'This is an app that allows users to post date ideas they have and to browse othe' +
                    'r ideas others have posted.',
            key: 3
        }
    ])
}

function Portfolio() {
    const projects = getProjs();
    return (
        <div className="profile-content">
            <h1>Portfolio</h1>
            <div className="profile-content-flex">
                {projects.map((post) => (
                    <div className="card border border-primary" key={post.projName}>
                        <img
                            className="card-img-top"
                            alt="Project"
                            src={require(`../../assets/projectImages/${post.projPic}.PNG`)}/>
                        <div className="card-body">
                            <h5>
                                {post.projName}
                            </h5>
                            <p>
                                {post.projDesc}
                            </p>
                            <a
                                href={post.projLink}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="btn btn-primary">Project Link</a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Portfolio;