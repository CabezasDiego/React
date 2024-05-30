import slide1 from "../assets/img/1-Slide.webp" 
import slide2 from "../assets/img/2-Slide.webp" 
import slide3 from "../assets/img/3-Slide.webp" 
import slide4 from "../assets/img/4-Slide.webp" 
import slide5 from "../assets/img/5-Slide.webp" 
import truck from "../assets/img/truck.svg"
import lock from "../assets/img/lock.svg"
import ItemsDestacados from "./ItemsDestacados"



const Carousel = ()=>{

    return (
        <div id="carouselExampleRide" className="carousel slide py-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="slide1"/>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="slide2"/>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="slide3"/>
                </div>
                <div className="carousel-item">
                    <img src={slide4} className="d-block w-100" alt="slide4"/>
                </div>
                <div className="carousel-item">
                    <img src={slide5} className="d-block w-100" alt="slide5"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="container">
                <div className="row py-5 text-center">
                    <div className="col py-4">
                        <div>
                            <img src={truck} alt="truck" width={42} />
                        </div>
                        <div>
                            <h3><strong>Envíos a todo el país</strong></h3>
                            <p>Desde Salta a todos el país</p>
                        </div>

                    </div>
                    <div className="vr"></div>
                    <div className="col py-4">
                        <div className="col">
                            <img src={lock} alt="lock" width={42} />
                        </div>
                        <div className="col">
                            <h3><strong>SITIO SEGURO</strong></h3>
                            <p>Protegemos tus datos</p>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row my-5">
                        <ItemsDestacados/>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Carousel;