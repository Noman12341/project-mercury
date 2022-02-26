import React from 'react'
import { Container } from 'react-bootstrap';
import { Banner } from "../../components";
function AboutUs() {
    return (
        <div>
            <Container>
                <Banner />
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
                <div className='divider' />
            </Container>
        </div>
    )
}

export default AboutUs