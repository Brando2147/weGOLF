import React, { Component } from "react";
import newsAPI from "../utils/newsAPI"
import NewsCarousel from "../components/NewsCarousel/index.js"
import UserNav from "../components/UserNav/index.js"

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
                console.log(res)
                this.setState({
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
            <>
                <UserNav />
                <div className="column has-text-centered">
                    <h1 className="title is-1">In Golf News</h1>
                </div>
                <div className="newsFeedBox container box">
                    <NewsCarousel results={this.state.results} />
                </div>
            </>
        )
    }
}

export default NewsFeed;