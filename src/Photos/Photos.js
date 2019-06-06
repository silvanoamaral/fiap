import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import './Photos.scss'

class Photos extends Component {

    render() {
        const fotos = [
            {
                imagen: "/public/images/carousel/3-2-1-tecnologia.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/a-luta-da-tecnologia.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/corrida-de-drones.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/coworking-paulista.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/coworking-vila-olimpia.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/desenvolvimento-de-habilidades-de-lideranca.jpg",
                title: "",
                alt: ""
            },{
                imagen: "/public/images/carousel/drone-em-acao.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/game-dev-lab.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/impressora-laser.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/innovation-lab.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/mais-tecnologia-na-pista.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/o-importante-e-inovar.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/preparacao-de-um-vencedor.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/programacao-de-drones.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/projeto-e-lancamento-de-minifoguetes.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/que-venca-a-tecnologia.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/robo-pronto-para-o-desafio.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/robos-em-combate.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/sala-de-aula.jpg",
                title: "",
                alt: ""
            },
            {
                imagen: "/public/images/carousel/so-robo-campeao.jpg",
                title: "",
                alt: ""
            }
        ]

        return (
            <section className="photos">        
               <div className="content">
                    <h1 class="photos__title">Fotos</h1>
                    <div className="photos__gallery">
                        <div className="photos__gallery-content">
                            <Carousel 
                                renderTopCenterControls={({ currentSlide, slideCount }) => 
                                <div>{currentSlide + 1} de {slideCount}</div>
                                }
                            >

                                {
                                    fotos.map(item => {
                                        return <img alt={ item.alt } src={ item.imagen } key={ item.imagen } />
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
               </div>
            </section>
        )
    }
}

export default Photos