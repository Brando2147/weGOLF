import React, { Component } from "react";
import newsAPI from "../../utils/newsAPI"

class NewsFeed extends Component {
    state = {
        results: {},
        search: "golf"
    }

    componentDidMount() {
        this.searchNews("golf")
    }

    searchNews = query => {
        newsAPI.search(query)
            .then(res => this.setState({ results: res.data.articles }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <img src={this.state.results[0].urlToImage} />
                <h4>{this.state.results[0].title}</h4>
                <p>by {this.state.results[0].author}</p>
                <p>{this.state.results[0].description}</p>
            </div>
        )
    }
}

export default NewsFeed;