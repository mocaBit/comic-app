import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorites, deleteFavorites } from '../../../actions';
import NotFound from '../../shared/notFound/NotFound';

class CharacterItem extends Component {

    addOrRemoveFavorite(comic){
        this.isFavorite(comic.resourceURI)
            ? this.props.deleteFavorites(comic.resourceURI)
            : this.props.addFavorites(comic);
    }

    isFavorite(resourceUri) {
        return this.props.favorites.some(fav => { return fav.resourceURI === resourceUri });
    }

    render() {
        const character = this.props.characters.find(char => char.id === this.props.characterId);
        if(typeof character === 'undefined'){
            return(<NotFound />)
        }
        return(
            <div className="Detail">
                <div className="row-fluid">
                    <div className="col text-center">
                    <img className="img-fluid img-thumbnail" style={{width: '300px'}}
                        src={character.thumbnail.path + '.' + character.thumbnail.extension}
                        alt="track"/>
                    </div>
                    <div className="col text-center">
                        <h2>{character.name}</h2>
                    </div>
                </div>
                <div className="list-group" style={{marginBottom: '40px'}}>
                    <a className="list-group-item list-group-item-action active">Comics</a>
                {
                character.comics.items.map((comic, index) => {                    
                    return(
                        <a key={index}
                            className="list-group-item list-group-item-action"
                            onClick={() => {this.addOrRemoveFavorite(comic)}}>
                            {comic.name }
                            {
                                this.isFavorite(comic.resourceURI)
                                    ? <span className="badge badge-danger badge-pill">Remove from favorites</span>
                                    : <span className="badge badge-primary badge-pill">Add to favorites</span>
                            }
                        </a>
                    )
                })
                }
                </div>
            </div>
        )
    }
}

function mapStoreToProps(state) {
    const { characters, favorites } = state;
    return {
        characters,
        favorites
    }
}

export default connect(mapStoreToProps, {addFavorites, deleteFavorites })(CharacterItem);