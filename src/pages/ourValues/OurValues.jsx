import React from 'react'
import { Container } from "react-bootstrap";
import { Banner } from "../../components";

function OurValues() {
    return (
        <div>
            <Container>
                <Banner title="Our Vision" url={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
                <div className='text-left'>
                    <p><strong>MERCURY </strong>has the depth of experience and professionalism to provide its clients customized solutions and high quality of service. We have a growing international presence and proven expertise in markets around the globe. Mercury is committed to delivering results through effective project management that leverages its experience and skill set.</p>
                    <p>We work with highly qualified partners to provide turnkey engineering solutions mainly in the power, steel, oil &amp; gas and other sectors. Our custom designed solutions focus on manufacturing, supply, installation and commissioning.</p>
                    <p>We have the infrastructure in place to directly supply products like metal, petroleum products, chemicals, cement, urea, rice, grain, timber, carpets, surgical instruments, sports goods, cotton yarn and fabric while maintaining high standards of quality.</p>
                </div>
                <div className='divider' />
                <h2 className='text-center my-4'>Our Mission</h2>
                <p>Our goal at Mercury is to provide our customers with the highest quality turnkey engineering solutions with personalized service from our experienced technical and management staff. We accomplish this by establishing long-term relationships with our suppliers who share our philosophy of quality and service.</p>
                <p>All of us at Mercury continuously look for ways to further improve our products and services giving customers the confidence in dealing with us. We at Mercury are committed to providing customers with first class customer service and ensure ‘value-add’ offering excellent product quality.</p>

            </Container>
        </div>
    )
}

export default OurValues