import React from "react"
import ReactHtmlParser from 'react-html-parser';
import "./style.css"

function NewsCarousel(props) {

    return (
        <div className="container column is-6">
            {props.results.map(each => (

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-2by1">
                            <a href={each.url} target="_blank" rel="noopener noreferrer">
                                <img src={each.image} alt="article" />
                            </a>
                        </figure>
                    </div>

                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="articleTitle title is-4">{each.title}</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>{ReactHtmlParser(each.description)}</p>
                            <hr></hr>
                            <time dateTime={each.published}>{new Date(each.published).toDateString()}</time>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default NewsCarousel;