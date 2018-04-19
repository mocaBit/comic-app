import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotFound from '../../shared/notFound/NotFound';

class CharacterItem extends Component {

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
                        className="list-group-item list-group-item-action">
                            {comic.name }
                            {
                                <span className="badge badge-primary badge-pill">Add to favorites</span>
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
    const { characters } = state;
    return {
        characters
    }
}

export default connect(mapStoreToProps, null)(CharacterItem);