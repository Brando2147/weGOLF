import React from "react"
import ReactHtmlParser from 'react-html-parser';


function NewsCarousel(props) {

    return (
        <div className="container column is-6">
            {props.results.map(each => (
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-2by1">
                            <a href={each.url} target="_blank">
                                <img src={each.image} />
                            </a>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-4">{each.title}</p>
                        </div>
                    </div>
                    <div className="content">
                        {ReactHtmlParser(each.description)}
                        <br />
                        <time dateTime={each.published}>{each.published}</time>
                    </div>
                </div>))}
        </div >
    )
}

export default NewsCarousel;