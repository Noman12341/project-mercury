import React from 'react'
import { SpecialityCard } from '../../components'
import img1 from '../../assets/images/img-1.png';
import img2 from '../../assets/images/img-2.png';
import img3 from '../../assets/images/img-3.png';
import img4 from '../../assets/images/img-4.png';
import { Row, Col } from 'react-bootstrap';

const specalityCardsList = [
    { id: 1, imgUrl: img1, title: "OIL & GAS", decription: "Leading engagement in a number of oil & gas installation projects" },
    { id: 2, imgUrl: img2, title: "POWER AND ENERGY", decription: "Vast portfolio EPC services of old and existing plants" },
    { id: 3, imgUrl: img3, title: "Steel", decription: "Leading partners in Turnkey Engineering solutions and EPC services" },
    { id: 4, imgUrl: img4, title: "COMMODITIES", decription: "Leading suppliers of Wheat, Sunflower Oil, Coal, Chemicals" },

]

function Home() {
    return (
        <div>
            <section className="px-5 py-3">
                <Row>
                    {specalityCardsList.map(item => (
                        <Col lg={3} key={item.id}>
                            <SpecialityCard imgUrl={item.imgUrl} title={item.title} decription={item.decription} />
                        </Col>
                    ))}

                </Row>
            </section>
        </div>
    )
}

export default Home