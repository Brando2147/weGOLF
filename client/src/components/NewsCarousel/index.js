import React from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


function NewsCarousel(props) {
    console.log(props.results)
    console.log(typeof props.results)


    var stringToHTML = function (str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    };

    return (
        <div className="container column is-6">

            {/* <div>

                {
                    props.results.map(each => (
                        <p>{each.title}</p>
                    ))
                }
            </div> */}

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