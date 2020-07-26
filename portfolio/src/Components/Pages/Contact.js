import React, {useState} from 'react';
import '../../App.css';

function Contact() {
    const [message,
        setMessage] = useState("");
    const [name,
        setName] = useState("");
    const [email,
        setEmail] = useState("");
    const [errors,
        setErrors] = useState("");
    const [success,
        setSuccess] = useState("");

    function handleSubmit() {
        const templateId = 'ContactEmail';

        sendFeedback(templateId, {
            message_html: message,
            from_name: name,
            reply_to: email
        })
    }

    function sendFeedback(templateId, variables) {
        window
            .emailjs
            .send('gmail', templateId, variables)
            .then(res => {
                setSuccess('Message successfully sent!');
            })
            .catch(err => {
                setErrors('Message was not sent successfully.');
                console.log(err);
            })
    }

    return (
        <div className="profile-content">

            <section className="">

            <div className="row">
                <div className="col">
                    <h1 className="content-header">Contact Me</h1>
                    <hr/>
                </div>
            </div>
                <p className="text-center endheader">
                    For professional inquiries, feel free to contact me below. General response time
                    within 24 hour.
                </p>

                <div className="row startofcontent">

                    <div className="col-md-12">
                        <form id="contact-form" name="contact-form">

                            <div className="row">

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>
                                            Name:
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                autofocus="autofocus"
                                                className="form-control"
                                                required
                                                onChange={e => setName(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>
                                            Email:
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                required
                                                onChange={e => setEmail(e.target.value)}/>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-12">

                                    <div className="form-group">
                                        <label>
                                            Message:
                                            <textarea
                                                onChange={e => setMessage(e.target.value)}
                                                required
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows="3"
                                                cols="70"
                                                className="form-control"></textarea>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </form>

                        <div className="text-center">
                            <button className="btn btn-primary" onClick={handleSubmit}>Send</button>
                        </div>
                        <div >
                            <p className="success">
                                {success}
                            </p>
                            <p className="errors">
                                {errors}
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-md-3 text-center"
                        style={{
                        borderLeft: "2px",
                        borderColor: "black"
                    }}>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Contact;
