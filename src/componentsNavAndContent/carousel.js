import React from "react"

class Carousel extends React.Component {
    render() {
        return (
 <div class="container-fluid p-1">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner rounded">
                    <div class="carousel-item active">
                        <img src="https://cdn.pixabay.com/photo/2017/03/12/17/24/forest-2137574_960_720.jpg" class="d-block w-100" height="400" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img3.goodfon.ru/wallpaper/nbig/e/6c/priroda-vecher-pasmurno-plyazh.jpg" height="400" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img1.goodfon.ru/wallpaper/nbig/a/1b/solnce-les-priroda-dark-forest.jpg" class="d-block w-100" height="400" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev outline-none" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon outline-none" aria-hidden="true"></span>
                    <span class="sr-only outline-none">Previous</span>
                </a>
                <a class="carousel-control-next outline-none" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon outline-none" aria-hidden="true"></span>
                    <span class="sr-only outline-none">Next</span>
                </a>
            </div>
        </div>
        );
    }
}

export default Carousel;
