import React, { Component } from 'react';
import './App.css';
import { Input } from 'antd';
import DisplayCard from './DisplayCard';
import { handleResponse } from './helper';

const { Search } = Input;


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fruitData: [],
            submitted: false,
            error: null,
        }
    }

    getFruit = (query) => {
        fetch(`http://localhost:5000/api/${query}`)
            .then(handleResponse)
            .then((jsondata) => {
                this.setState({
                    fruitData: [jsondata],
                    submitted: true,
                    error: null
                });
                console.log(jsondata);
            })
            .catch((error) => {
                this.setState({
                    error: 'Error in search',
                    submitted: true
                });
            });
    }


    render() {
        let { fruitData, submitted, error } = this.state;
        return (
            <div>

                <div className="title">
                    <h1>Fruit API</h1>
                </div>

                <div className="search-bar">
                    <Search
                        placeholder="Enter a fruit (apple, peach, orange, banana)"
                        enterButton="Search"
                        size="medium"
                        onSearch={query => this.getFruit(query)} />
                </div>

                {submitted && error ? (
                    <div className="not-found">
                        <span className="error-message">Not found! Please search again.</span>
                    </div>
                ) : (
                        <div className="card-container">
                            {fruitData.map((desc) => {
                                return (
                                    <DisplayCard key={desc.name} data={desc} />
                                )
                            })}
                        </div>
                    )
                }

            </div>
        )
    }
}

export default MainPage;
