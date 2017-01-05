import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ajax from 'superagent';
import {Pagination} from 'react-bootstrap';
import {Link} from 'react-router';
import Details from './details.jsx';
import AppBar from 'material-ui/AppBar';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import {Container, Row, Col} from 'react-grid-system';

const style = {
    margin: 12
};

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mList: null,
            value: '',
            search: false,
            currentPage: 1,
            results: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.ajaxCall = this.ajaxCall.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value, currentPage: 1});
    }

    ajaxCall()
    {
        let url = "http://www.omdbapi.com/?s=" + this.state.value + "&page=" + this.state.currentPage;
        ajax.get(url).end((error, response) => {
            if (response) {
                console.log(response);
                let movies = response.body.Search;
                this.setState({search: true, mList: movies, results: response.body.totalResults});

            } else {
                console.log('There was an error fetching from API', error);
            }

        });

    }
    handleSelect(eventKey) {
        this.setState({currentPage: eventKey});
        this.ajaxCall();
    }

    render() {
        let isSearch = this.state.search;
        let content = null;

        if (isSearch) {
            content = <Container>
                <Row>
                    {this.state.mList.map((details, i) => (
                        <Col lg={4} sm={6} xs={12}>
                            <Card key={i} style={{
                                height: "310px",
                                width: "280px",
                                marginBottom: "40px"
                            }}>
                                <Link to={"details/" + details.imdbID}>
                                    <CardMedia overlay={< CardTitle title = {
                                        details.Title
                                    } />}>
                                        <img src={details.Poster} style={{
                                            height: "300px",
                                            width: "280px",
                                            marginBottom: "20px"
                                        }}/>
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <center>
                        <Pagination bsSize="large" prev next first last ellipsis boundaryLinks maxButtons={10} items={Math.ceil(this.state.results / 10)} activePage={this.state.currentPage} onSelect={this.handleSelect}/>
                    </center>
                </Row>
            </Container>

        } else {
            content = null;
        }
        return (
            <div>
                <AppBar title="MovieFinder"/>
                <center><TextField hintText="Type Movie Name Here" value={this.state.value} onChange={this.handleChange}/>
                    <RaisedButton label="Search" primary={true} style={style} onClick={this.ajaxCall}/>
                </center>
                {content}

            </div>
        );
    }
}

export default SearchBar;
