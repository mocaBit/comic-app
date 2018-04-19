import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import './CharacterList.css';

export class CharacterList extends Component {
    render() {
        return(
            <div>                
                <div className="CharapterList">
                    <div className={this.props.search.isSearching ? 'searching':'hide'}>
                        <div>
                            <ReactLoading type='spin' color='#FFFFFF'/>
                        </div>
                    </div>
                    {
                    this.props.characters.length > 0 
                        ?   this.props.characters.map(character => {
                                const { path, extension } = character.thumbnail;
                                return(
                                    <Link 
                                        to={`/character/${character.id}`}
                                        key={character.id} 
                                        className="track">
                                        <img className="track-img"
                                            src={path+'.'+extension}
                                            alt="track"/>
                                        <p className="track-text">
                                            {character.name}
                                        </p>
                                    </Link>
                                )
                            })
                        : <h1 className="text-center" style={{color:'#a7a7a7'}}><strong>No results, use the search field!</strong></h1>
                    }
                </div>
            </div>
        )
    }
}

function mapStoreToProps(state){
    const { characters, search} = state;
    return {
        characters,
        search
    }
}

export default connect(mapStoreToProps, null)(CharacterList);