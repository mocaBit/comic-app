import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setFavorites } from '../../../actions';
import './FavoriteCount.css';
import { getStorage } from '../../../helpers/LocalStorage';

class FavoriteCount extends Component {

    componentDidMount() {
        this.props.setFavorites(getStorage('favorites')||[]);
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