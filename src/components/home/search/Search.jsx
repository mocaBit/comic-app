import React, { Component } from 'react';
import md5  from 'md5';
import { connect } from 'react-redux';
import { setSearch, setCharacter } from '../../../actions';
import './Search.css';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeout: null
        }
    }

    search(query) {
        if(query.length > 0){
            //ACTION: [SET_SEARCH : true]
            this.props.setSearch({isSearching: true, query});
            //Setea parámetros de petición
            const publicKey = '4e772d3390c42e2a084c1f0d32b37768';
            const privateKey = 'e2855e5d88fbab50603a95f8c15e6643a069fa95';
            const ts = '1';
            const limit = '10';
            const hash = md5(ts+privateKey+publicKey);
            const baseURI = 'https://gateway.marvel.com:443/v1/public/characters?';
            const resourseURI = `${baseURI}nameStartsWith=${query}&limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
            //Realiza petición
            fetch(resourseURI, { method: 'GET' })
                .then(res => res.json())
                .then(response => {
                    //ACTION: [SET_CHARACTER : json ]
                    this.props.setCharacter(response.data.results);
                    console.log('result:', response.data.results);
                    //ACTION: [SET_SEARCH : false]
                    this.setState({isSearching: false});
                    this.props.setSearch(this.state); 
                })
        }
    }    

    render() {
        return(
            <div className="align-content-md-center Search">
                <div className="text-center">                        
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        onChange={event => {
                                    let timeout = this.state.timeout;
                                    let query = event.target.value;
                                    clearTimeout(timeout);
                                    timeout = setTimeout(()=>{this.search(query)}, 500);
                                    this.setState({timeout});
                                 }}/>
                </div>
            </div>
        )
    }
}

function mapStoreToProps(state) {
    const { search } = state;
    return {
        search
    }
}

export default connect(mapStoreToProps, { setSearch, setCharacter })(Search);