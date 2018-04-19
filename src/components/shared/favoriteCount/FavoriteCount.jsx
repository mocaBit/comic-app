import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setFavorites } from '../../../actions';
import './FavoriteCount.css';

class FavoriteCount extends Component {

    componentDidMount() {
        this.props.setFavorites();
    }

    render() {
        return(
            <Link to={'/favorite'} className="FavoriteCount">Favorites ({this.props.favorites.length})</Link>
        )
    }
}

function mapStoreToProps(state) {
    const { favorites } = state;
    return {
        favorites
    }
}

export default connect(mapStoreToProps, {setFavorites})(FavoriteCount);