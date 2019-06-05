import React, { Component } from 'react'

import './Header.scss'

class Header extends Component {

    render() {
        const menu = [
            {
                category: "",
                name: "Conceito",
                url: "/"
            },
            {
                category: "",
                name: "Fotos",
                url: "/"
            },
            {
                category: "",
                name: "Notícias",
                url: "/"
            },
            {
                category: "",
                name: "Fale Conosco",
                url: "/"
            }
        ]
        
        return (
            <header className="header">
                <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 27" width="94" height="27">
	<defs>
		<image width="572" height="154" id="img1" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzMgMTU1IiB3aWR0aD0iNTczIiBoZWlnaHQ9IjE1NSI+Cgk8ZGVmcz4KCQk8Y2xpcFBhdGggY2xpcFBhdGhVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjcDEiPgoJCQk8cGF0aCBkPSJNMCAwTDU3MiAwTDU3MiAxNTRMMCAxNTRaIiAvPgoJCTwvY2xpcFBhdGg+Cgk8L2RlZnM+Cgk8c3R5bGU+CgkJdHNwYW4geyB3aGl0ZS1zcGFjZTpwcmUgfQoJCS5zaHAwIHsgZmlsbDogI2ZmMmY2NSB9IAoJPC9zdHlsZT4KCTxnIGlkPSJQYWdlIDEiIGNsaXAtcGF0aD0idXJsKCNjcDEpIj4KCQk8cGF0aCBpZD0iUGF0aCAxIiBjbGFzcz0ic2hwMCIgZD0iTTE2Mi43MyAxNTRMMTc0LjA5IDE1NEwxNzQuMDkgMS4xOUwxNjIuNzMgMS4xOUwxNjIuNzMgMTU0Wk00Mi4zOSA4NC44TDk3LjggODQuOEw5Ny44IDc0LjMyTDQyLjM5IDc0LjMyTDQyLjM5IDg0LjhaTTAgMS4xOUwwIDE1NEwxMS4zNSAxNTRMMTEuMzUgODQuOEwxMS4zNiA4NC44TDExLjM2IDc0LjMyTDExLjM1IDc0LjMyTDExLjM1IDExLjY3TDEyOS4wNSAxMS42N0wxMjkuMDUgMS4xOUwwIDEuMTlaTTUxNS40NSAwLjZMNDI1IDAuNkw0MjUgMTUzLjQxTDQzNi4zNSAxNTMuNDFMNDM2LjM1IDk2LjQzTDQzNi40NCA5Ni40M0w0MzYuNDQgODUuOTZMNDM2LjM1IDg1Ljk2TDQzNi4zNSAxMS4wOEw1MTQuNTggMTEuMDhDNTQyLjA4IDExLjA4IDU2MC44NSAyMy43NCA1NjAuODUgNDcuOTdMNTYwLjg1IDQ4LjQxQzU2MC44NSA3MS4xMSA1NDEuNjQgODUuOTYgNTEzLjI3IDg1Ljk2TDQ3Ny40NyA4NS45Nkw0NzcuNDcgOTYuNDNMNTEyLjYxIDk2LjQzQzU0NC40OCA5Ni40MyA1NzIuMjEgNzkuODQgNTcyLjIxIDQ3Ljc2TDU3Mi4yMSA0Ny4zMkM1NzIuMjEgMTcuODUgNTQ5LjA3IDAuNiA1MTUuNDUgMC42Wk0zNTguOTcgODUuOTZMMzA1Ljk4IDAuMDJMMjk1LjA2IDAuMDJMMjAwLjY4IDE1My45MkwyMTIuNDYgMTUzLjkyTDMwMC4zIDEyLjQ3TDM0Ni4wOSA4NS45NkwzNTguOTcgODUuOTZaTTM3Ni40IDExNC4yM0wzNjMuNzEgMTE0LjIzTDM4OC40MyAxNTMuOTJMNDAwLjg3IDE1My45MkwzNzYuNCAxMTQuMjNaIiAvPgoJPC9nPgo8L3N2Zz4="/>
	</defs>
	<use id="LOGO FIAP" href="#img1" transform="matrix(0.164,0,0,0.175,0,0)"/>
</svg>
                </div>
                <div className="menu">
                    <ul className="menu__list">
                        {
                            menu.map(item => {
                                return <li key={ item.name }><a href={ item.url }>{ item.name }</a></li>
                            })
                        }
                    </ul>
                    <div className="menu__login">
                        <span>Login</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header