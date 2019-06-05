import React, { Component } from 'react'

import './Footer.scss'

class Footer extends Component {

    render() {
        const iconFooter = {
            facebook: '<svg id="icon-social-facebook" viewBox="0 0 512 512" width="100%" height="100%"><path d="M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z"></path></svg>',
            twitter: '<svg id="icon-social-twitter" viewBox="0 0 512 512" width="100%" height="100%"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36-12.6 7.5-26.5 12.9-41.3 15.8C357.6 146 340.7 138 322 138c-42 0-72.9 39.2-63.4 79.9-54.1-2.7-102.1-28.6-134.2-68-17 29.2-8.8 67.5 20.1 86.9-10.7-.3-20.7-3.3-29.5-8.1-.7 30.2 20.9 58.4 52.2 64.6-9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2-27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6 12.9-9.1 23.9-20.5 32.6-33.6z"></path></svg>',
            youtube: '<svg id="icon-social-youtube" viewBox="0 0 512 512" width="100%" height="100%"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54-50.8-3.5-164.3-3.5-215.1 0-35.7 2.4-53.7 8.7-59 54-4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54 4-33.6 4-91.1 0-124.8zM222.2 303.4v-94.6l90.7 47.3-90.7 47.3z"></path></svg>',
            instagram: '<svg id="icon-social-instagram" viewBox="0 0 512 512" width="100%" height="100%"><path d="M365.3 234.1h-24.7c1.8 7 2.9 14.3 2.9 21.9 0 48.3-39.2 87.5-87.5 87.5s-87.5-39.2-87.5-87.5c0-7.6 1.1-14.9 2.9-21.9h-24.7v120.3c0 6 4.9 10.9 10.9 10.9h196.8c6 0 10.9-4.9 10.9-10.9V234.1zm0-76.5c0-6-4.9-10.9-10.9-10.9h-32.8c-6 0-10.9 4.9-10.9 10.9v32.8c0 6 4.9 10.9 10.9 10.9h32.8c6 0 10.9-4.9 10.9-10.9v-32.8zM256 201.3c-30.2 0-54.7 24.5-54.7 54.7 0 30.2 24.5 54.7 54.7 54.7 30.2 0 54.7-24.5 54.7-54.7 0-30.2-24.5-54.7-54.7-54.7m109.3 196.8H146.7c-18.1 0-32.8-14.7-32.8-32.8V146.7c0-18.1 14.7-32.8 32.8-32.8h218.7c18.1 0 32.8 14.7 32.8 32.8v218.7c-.1 18-14.7 32.7-32.9 32.7"></path></svg>',
            linkedin: '<svg id="icon-social-linkedin" viewBox="0 0 512 512" width="100%" height="100%"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z"></path></svg>',
            logo: '<svg class="footer__logo-icon" viewBox="0 0 574.206 155.976"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-fiap"><svg id="logo-fiap" viewBox="0 0 574.206 155.976" width="100%" height="100%"><path d="M163.733 2.17h11.35v152.805h-11.35z"></path><path fill="none" d="M163.733 2.17h11.35v152.805h-11.35z"></path><path d="M43.387 75.298h55.408v10.478H43.387z"></path><path fill="none" d="M43.387 75.298h55.408v10.478H43.387z"></path><path d="M1 2.17v152.806h11.35v-69.2h.015V75.297h-.014v-62.65h117.696V2.17"></path><path fill="none" d="M1 2.17v152.806h11.35v-69.2h.015V75.297h-.014v-62.65h117.696V2.17z"></path><path d="M516.45 1.58h-90.446v152.806h11.35V97.41h.083V86.935h-.082V12.06h78.223c27.505 0 46.277 12.66 46.277 36.89v.438c0 22.7-19.21 37.546-47.588 37.546H478.47V97.41h35.142c31.87 0 59.595-16.59 59.595-48.678v-.436c0-29.47-23.14-46.715-56.758-46.715"></path><path fill="none" d="M516.45 1.58h-90.446v152.806h11.35V97.41h.083V86.935h-.082V12.06h78.223c27.505 0 46.277 12.66 46.277 36.89v.438c0 22.7-19.21 37.546-47.588 37.546H478.47V97.41h35.142c31.87 0 59.595-16.59 59.595-48.678v-.436c0-29.47-23.14-46.715-56.758-46.715"></path><path d="M359.968 86.935L306.978 1h-10.915l-94.387 153.897h11.788l87.84-141.453 45.786 73.49"></path><path fill="none" d="M359.968 86.935L306.978 1h-10.915l-94.387 153.897h11.788l87.84-141.453 45.786 73.49z"></path><path d="M377.403 115.21h-12.697l24.727 39.686h12.44"></path><path fill="none" d="M377.403 115.21h-12.697l24.727 39.686h12.44z"></path></svg></use></svg>'
        }

        return (
            <footer className="footer content">
                <div className="footer__columns">
                <div className="footer__column">
                        <div className="footer_logo">
                            <span dangerouslySetInnerHTML={{__html: iconFooter.logo }} />
                        </div>

                        <div className="footer__section">
                            <span className="footer__title">Siga-nos</span>

                            <ul className="footer__social">
                                <li>
                                    <span dangerouslySetInnerHTML={{__html: iconFooter.facebook }} />
                                </li>
                                <li>
                                    <span dangerouslySetInnerHTML={{__html: iconFooter.twitter }} />
                                </li>
                                <li>
                                    <span dangerouslySetInnerHTML={{__html: iconFooter.youtube }} />
                                </li>
                                <li>
                                    <span dangerouslySetInnerHTML={{__html: iconFooter.instagram }} />
                                </li>
                                <li>
                                    <span dangerouslySetInnerHTML={{__html: iconFooter.linkedin }} />
                                </li>            
                            </ul>
                        </div>

                        <div className="footer__section copyright">
                            <a href="tel:+551133858010">11 3385-8010</a>
                            <strong className="text-roboto-bold">FIAP 2019.</strong>
                            <p>Todos os direitos reservados.</p>
                        </div>
                    </div>

                    <div className="footer__column">
                        <div className="footer__section">
                            <span className="footer__title">A FIAP</span>

                            <ul className="footer__list">
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#a-fiap">A FIAP</a>
                            </li>
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#disrupcao">Disrupção</a>
                            </li>
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#fotos">Fotos</a>
                            </li>
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#videos">Vídeos</a>
                            </li>
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#premios-e-reconhecimentos">Prêmios e Reconhecimentos</a>
                            </li>
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#parcerias-estrategicas">Parcerias Estratégicas</a>
                            </li>
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#hub">HUB FIAP</a>
                            </li>
                            <li>
                            <a href="https://www.fiap.com.br/institucional/#unidades">Unidades</a>
                            </li>
                        </ul>
                        </div>

                        <div className="footer__section">
                            <span className="footer__title">Links Úteis</span>

                            <ul className="footer__list">
                                <li>
                                <a href="https://www.fiap.com.br/fale-conosco/">Fale Conosco</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/trabalhe-conosco/">Trabalhe Conosco</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__column">
                        <div className="footer__section">
                            <span className="footer__title">HUB FIAP</span>

                            <ul className="footer__list">
                                <li>
                                <a href="https://www.fiap.com.br/mba/">MBA</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/online/">MBA On-line</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/graduacao/">Graduação</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/online/">Graduação On-line</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/shift/">SHIFT</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/pronatec/">PRONATEC</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/fiapx/">FIAP X</a>
                                </li>
                                <li>
                                <a href="http://www.maratonadeaplicativos.com.br/">Maratona de Aplicativos</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/calltoinnovation/">Call to Innovation</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/ihelp/workshop-do-bem/">Workshop do Bem</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/colegio/">FIAP School</a>
                                </li>
                            </ul>
                        </div>                        
                    </div>

                    <div className="footer__column">
                        <div className="footer__section">
                            <span className="footer__title">Unidades</span>

                            <ul className="footer__list">
                                <li>
                                <a href="https://www.fiap.com.br/institucional/#unidades">Aclimação</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/institucional/#unidades">Paulista</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/institucional/#unidades">Vila Olímpia</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/institucional/#unidades">Alphaville</a>
                                </li>
                            </ul>
                        </div>
                                
                        <div className="footer__section">
                            <span className="footer__title">Mídia</span>

                            <ul className="footer__list">
                                <li>
                                <a href="https://www.fiap.com.br/noticias/">Notícias</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/imprensa/">Imprensa</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/acontece/fiap-na-china/">FIAP na China</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/acontece/fiap-no-vale-do-silicio/">FIAP no Vale do Silício</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/acontece/fiap-no-sxsw-2018/">FIAP no SxSW 2018</a>
                                </li>
                                <li>
                                <a href="https://www.fiap.com.br/acontece/next-fiap-festival//">NEXT FIAP Festival</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer