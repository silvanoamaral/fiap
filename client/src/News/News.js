import React, { Component } from 'react'

import './News.scss'
const jsonNews = require('./jsonNews.js')

class News extends Component {

    render() {        
        return (
            <section className="news">
                <div className="content">
                    <h1 className="title_main">Notícias</h1>

                    <ul className="news__list">
                        {
                            jsonNews.map(item => {
                                return <li key={ item.title }>
                                    <div className="news__list-img">
                                        <img src={ item.imageUrl } />
                                    </div>
                                    <h2>{ item.title }</h2>
                                    <strong>{ item.data }</strong>
                                    <p>{ item.descrition }</p>
                                    <span className="btn__leia-mais">
                                        <span><svg width="100%" height="100%" className="icon__plus" xmlns="http://www.w3.org/2000/svg" ><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg></span>
                                        Leia Mais
                                    </span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

export default News