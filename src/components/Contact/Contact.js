import React from "react";
import { Container } from "react-bootstrap";
import Resume from "./ResumeFrankline-Kiplangat.pdf";

function Contact() {
    return (
        <Container fluid style ={{ height: "91.4vh"}} className="resume-section">
                <div class="section-heading text-center mt-5 mr-5">
                    <div class="text-center">
                        I'm currently accepting new projects and would love to hear from you.
                        <br />
                        I'm also available for freelance contracts, so get in touch:
                        <br /><br />
                        <a style={{ color: "white"}} href="emailto:kipfrankline@gmail.com" target="_blank" rel="noreferrer"
                            ><i fa fab-envelope></i>Email: kipfrankline@gmail.com</a>
                        <br /><br /> <br />
                        <button class="btn primary">
                            <a style={{color: "white"}} href="whatsapp://send?abid=+254724375662&text=Hello%2C%20World!">Send Message</a> 
                            </button><br /> <br />
                        <a style={{color: "white"}} href="tel:+254724375662">Tel: +254724375662</a>
                        <br /> <br />
                        <a
                            href={Resume}
                            download="Resume"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Download Resume</button>
                        </a>
                    </div>
                </div>

        </Container>
    );
}
export default Contact;