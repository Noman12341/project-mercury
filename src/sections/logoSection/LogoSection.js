import React from 'react'
import { Container } from 'react-bootstrap';
import "./logo-section.css";

function LogoSection() {
    return (
        <section id="logo-section">
            <Container>
                <h1 className="section-title section-title-bold-center"><b></b><span className="section-title-main" style={{ fontSize: "116%" }}>OUR ASSOCIATES</span><b></b></h1>
            </Container>
        </section>
    )
}

export default LogoSection