import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap';
import "./logo-section.css";

function LogoSection() {

    const sliderRef = useRef(null);
    const handlePrev = () => {
        const slide = sliderRef.current;
        slide.scrollLeft -= slide.offsetWidth;
        if (slide.scrollLeft <= 0) {
            slide.scrollLeft = slide.scrollWidth;
        }
    };
    const handleForward = () => {
        const slide = sliderRef.current;
        slide.scrollLeft += slide.offsetWidth;
        if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
            slide.scrollLeft = 0;
        }
    };

    return (
        <section id="logo-section">
            <Container>
                <h1 className="section-title section-title-bold-center"><b></b><span className="section-title-main" style={{ fontSize: "116%" }}>OUR ASSOCIATES</span><b></b></h1>
                <div className="cataBox">
                    <div>
                        <Button onClick={handlePrev} className="chipBtn">{"<"}</Button>
                    </div>
                    <div ref={sliderRef} className="scrollWrapper">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />

                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />
                        </div>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='' />
                        </div>
                    </div>
                    <div>
                        <Button className="chipBtn" onClick={handleForward}>{">"}</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LogoSection