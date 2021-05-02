import React, { Component } from "react";
import newsAPI from "../../utils/newsAPI"
import NewsCarousel from "../NewsCarousel/index.js"

class NewsFeed extends Component {
    state = {
        results: [],
        search: "golfing"
    }

    componentDidMount() {
        this.searchNews("golfing")
    }

    searchNews = query => {
        newsAPI.search(query)
            .then(res => {
                this.setState({


                    // results: res.data 
                    results: res.data.articles.slice(0, 1).map(each => {
                        return {
                            title: each.title,
                            description: each.description,
                            url: each.url,
                            image: each.urlToImage,
                            published: each.publishedAt
                        }
                    })
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <NewsCarousel results={this.state.results} />
        )
    }
}

export default NewsFeed;