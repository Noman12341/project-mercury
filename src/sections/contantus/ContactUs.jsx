import React from 'react'
import "./contact-us.css";
import { Row, Col, Container } from 'react-bootstrap';
import { AddressCard } from '../../components';

const addressCardDetail = [
    { id: 1, title: "Moscow", address: "15 Petrovka street, build. 1, office 20 Moscow 107031 Russia", phoneNo: "Tel: +7 (495) 621-11-28" },
    { id: 2, title: "Dubai", address: "Preatoni Tower, Cluster L, Office No 2510, Jumeriah Lake Towers (JLT), Dubai UAE", phoneNo: "Tel: +97 145 690 173" },
    { id: 3, title: "Karachi", address: "Suite # 301, 39C Shahbaz Commercial Lane 4 DHA Phase VI Karachi", phoneNo: "Tel/Fax: +92 334 307-93-04/ 334 310-37-74" },
    { id: 4, title: "ISLAMABAD ", address: "606, Margalla Hills, Double Road, E 11/1, Islamabad, Pakistan", phoneNo: "Tel: +92322602-36-73" },
]
function ContactUs() {
    return (
        <section id="contact-us-section">
            <h3 className="text-center py-5"><span className="contact-us-heading text-white">CONTACT US</span></h3>
            <Container>
                <Row>
                    {addressCardDetail.map(item => (
                        <Col lg={3} key={item.id}><AddressCard title={item.title} address={item.address} phoneNo={item.phoneNo} /></Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default ContactUs