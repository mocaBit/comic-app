import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { deleteFavorites, setFavorites, deleteAllFavorites } from '../../actions';
import { getStorage } from '../../helpers/LocalStorage';

class Favorite extends Component {

    componentDidMount() {        
        this.props.setFavorites(getStorage('favorites') || []);
    }

    removeFavorite(resourceURI){
        this.props.deleteFavorites(resourceURI);
    }

    removeAllFavorite() {
        this.props.deleteAllFavorites();
    }

    render() {
        return(
            <div className="row-fluid CharacterDetail">
                <div className="form-inline justify-content-md-center">
                    <Link to={'/'}>
                        <button className="btn btn-secondary btn-block">
                            <strong style={{fontSize: '18px'}}>&#171;</strong> Come back to list
                        </button>
                    </Link>
                </div>
                <h1 className="text-center">Favorites</h1>
                {
                    this.props.favorites.length > 0 
                        ?   <button className="btn btn-block btn-danger col-10"
                                onClick={() => {this.removeAllFavorite()}}>
                                Remove All Favorites
                            </button>
                        :  <div></div>
                }
                
                <div className="list-group" style={{marginBottom: '40px'}}>
                    {
                    this.props.favorites.length > 0
                        ?   this.props.favorites.map((comic, index) => {                        
                                return(
                                    <a key={index}
                                        className="list-group-item list-group-item-action"
                                        onClick={() => {this.removeFavorite(comic.resourceURI)}}>
                                        {comic.name }
                                        <span className="badge badge-danger badge-pill">Remove from favorites</span>
                                    </a>
                                )
                            })
                        :   <h1 className="text-center" style={{color:'#a7a7a7'}}><strong>No favorites yet!</strong></h1>
                    }
                </div>
            </div>
        )
    }
}

function mapStoreToProps(state) {
    const { favorites } = state;
    return {
        favorites
    }
}

export default connect(mapStoreToProps, { deleteFavorites, setFavorites, deleteAllFavorites })(Favorite);