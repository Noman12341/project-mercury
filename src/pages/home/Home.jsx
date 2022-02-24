import React from 'react'
import { SpecialityCard } from '../../components'
import img1 from '../../assets/images/img-1.png';
import img2 from '../../assets/images/img-2.png';
import img3 from '../../assets/images/img-3.png';
import img4 from '../../assets/images/img-4.png';
import { Row, Col, Carousel } from 'react-bootstrap';
import { ContactUs, WhoWeAre } from '../../sections';

const specalityCardsList = [
    { id: 1, imgUrl: img1, title: "OIL & GAS", decription: "Leading engagement in a number of oil & gas installation projects" },
    { id: 2, imgUrl: img2, title: "POWER AND ENERGY", decription: "Vast portfolio EPC services of old and existing plants" },
    { id: 3, imgUrl: img3, title: "Steel", decription: "Leading partners in Turnkey Engineering solutions and EPC services" },
    { id: 4, imgUrl: img4, title: "COMMODITIES", decription: "Leading suppliers of Wheat, Sunflower Oil, Coal, Chemicals" },

]

function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879__340.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="px-5 py-3 mt-3">
                <Row>
                    {specalityCardsList.map(item => (
                        <Col lg={3} key={item.id}>
                            <SpecialityCard imgUrl={item.imgUrl} title={item.title} decription={item.decription} />
                        </Col>
                    ))}

                </Row>
            </section>
            <div className='divider' />
            <WhoWeAre />
            <div className='divider' />
            {/* contact us section */}
            <ContactUs />

        </div>
    )
}

export default Home