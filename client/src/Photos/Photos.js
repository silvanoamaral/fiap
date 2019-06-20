import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import './Photos.scss'
const photos = require('./jsonPhotos.js')

class Photos extends Component {

    render() {
        return (
            <section className="photos">        
               <div className="content">
                    <h1 className="photos__title">Fotos</h1>
                    <div className="photos__gallery">
                        <div className="photos__gallery-content">
                            <Carousel 
                                renderTopCenterControls={({ currentSlide, slideCount }) => 
                                <div className="photos__gallery-count">{currentSlide + 1}/{slideCount}</div>
                                }
                            >

                                {
                                    photos.map(item => {
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