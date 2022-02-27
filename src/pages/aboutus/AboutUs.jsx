import React from 'react'
import { Container } from 'react-bootstrap';
import { Banner } from "../../components";
function AboutUs() {
    return (
        <div>
            <Container>
                <Banner title="Oil & Gas" url={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
                <div className='divider' />
                <p className='text-left'>Mercury Group of Companies represent world renown EPC organizations which can render their turnkey services for construction of new Plants including LNG Terminal, Refineries , Construction, Reconstruction and Overhaul of major gas and oil pipelines. These EPC organizations develop and implement measures to improve the efficiency of the use of materials and equipment, and reduction of cost.</p>
                <p className='text-left'>Oil &amp; Gas is one of the main sectors Mercury Group of Companies works in. Mercury currently deals in the provision and trading of the following:</p>
                <ul>
                    <li className='text-left'>LNG</li>
                    <li className='text-left'>Aviation Fuel</li>
                    <li className='text-left'>Gas Oil</li>
                    <li className='text-left'>Diesel</li>
                    <li className='text-left'>Gas Field Equipment, remote monitoring stations and Dew Point Analyzers and hygrometers.</li>
                </ul>
                <div className='text-left'>
                    <p><strong>MERCURY </strong>has the depth of experience and professionalism to provide its clients customized solutions and high quality of service. We have a growing international presence and proven expertise in markets around the globe. Mercury is committed to delivering results through effective project management that leverages its experience and skill set.</p>
                    <p>We work with highly qualified partners to provide turnkey engineering solutions mainly in the power, steel, oil &amp; gas and other sectors. Our custom designed solutions focus on manufacturing, supply, installation and commissioning.</p>
                    <p>We have the infrastructure in place to directly supply products like metal, petroleum products, chemicals, cement, urea, rice, grain, timber, carpets, surgical instruments, sports goods, cotton yarn and fabric while maintaining high standards of quality.</p>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs