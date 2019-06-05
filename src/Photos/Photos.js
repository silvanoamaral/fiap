import React, { Component } from 'react'

import './Photos.scss'

class Photos extends Component {

    render() {
        
        return (
            <section className="photos">        
               <div className="content">
                    <h1 class="photos__title">Fotos</h1>
                    <div className="photos__gallery">
                        <div className="photos__gallery-content">
                        
                        </div>
                    </div>
               </div>
            </section>
        )
    }
}

export default Photos