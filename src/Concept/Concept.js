import React, { Component } from 'react'

import './Concept.scss'

class Concept extends Component {

    render() {
        
        return (
            <section className="concept">        
               <div className="content">
                    <h3>A <strong>FIAP</strong> É O CENTRO DE  EXCELÊNCIA EM TECNOLOGIA  MAIS RESPEITADO</h3>
                    <p>UMA HISTÓRIA QUE VEM SENDO CONSTRUÍDA DIA APÓS DIA, ESTIMULANDO MENTES A VIVENCIAREM A INOVAÇÃO E O EMPREENDEDORISMO. PORQUE A FIAP ACREDITA NO PODER TRANSFORMADOR DA TECNOLOGIA.</p>
                    <span className="cta__join-us">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.1 37.2" class="shared-conceito-svg-join-us">
                            <path d="M24.1 23.86V1.36h-7.7v22.2c0 4-1.7 5.7-4.6 5.7-2.4 0-4.3-1.3-6.2-3.4L1 31.16c2.7 3.4 6.8 5.3 11.1 5.2 7.2-.1 12-4.1 12-12.5zm43.9-5.3c-.2-10.1-8.5-18-18.4-17.8-9.8.3-17.6 8.1-17.7 17.8v.1c.2 10 8.5 17.9 18.4 17.7 9.7-.2 17.5-8.1 17.7-17.8zm-7.8.1c0 5.9-4.2 10.7-10.2 10.7s-10.3-4.9-10.3-10.8v-.1c0-5.9 4.2-10.7 10.2-10.7s10.3 4.9 10.3 10.9zm23.7 17.2V1.36h-7.5v34.5h7.5zm40.2 0V1.36h-7.4v21.2l-15.9-21.2h-6.9v34.5h7.4v-22l16.4 21.9h6.4v.1zm54.7-15.1V1.36h-7.5v19.7c0 5.5-2.8 8.3-7.3 8.3s-7.3-2.9-7.3-8.5V1.36h-7.5v19.7c0 10.1 5.6 15.3 14.7 15.3s14.9-5.1 14.9-15.6zm33.6 4.9c0-6.1-3.9-8.6-10.8-10.4-5.9-1.5-7.3-2.3-7.3-4.5v-.1c0-1.7 1.5-3 4.4-3 2.9 0 5.8 1.3 8.8 3.4l3.9-5.7c-3.6-2.9-8-4.5-12.6-4.4-6.9 0-11.9 4.1-11.9 10.4v.1c0 6.8 4.4 8.8 11.3 10.5 5.7 1.5 6.8 2.5 6.8 4.4v.1c0 2-1.8 3.3-4.9 3.3-3.9 0-7.1-1.6-10.1-4.2l-4.4 5.4c4 3.6 9.1 5.5 14.4 5.5 7.3-.2 12.4-4 12.4-10.8z" opacity=".8" fill="none" stroke="#ed145b" stroke-width="1.5"></path>
                        </svg>
                    </span>
                    <span data-href="disrupcao" class="scroll__circle">
                        <span class="scroll__circle-text">Scroll Down</span>
                        <span class="scroll__circle-icon"></span>
                    </span>
               </div>
            </section>
        )
    }
}

export default Concept