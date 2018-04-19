import React, { Component } from 'react';
import { Link } from 'react-router';
import CharacterItem from './characterItem/CharacterItem';
import FavoriteCount from '../shared/favoriteCount/FavoriteCount';

class CharacterDetail extends Component {
    render() {    
        return(
            <div className="row-fluid CharacterDetail">
                <div className="form-inline justify-content-md-center">
                    <Link to={'/'}>
                        <button className="btn btn-secondary btn-block comeback">
                            <strong style={{fontSize: '18px'}}>&#171;</strong> Come back to list
                        </button>
                    </Link>
                </div>
                <CharacterItem characterId={Number.parseInt(this.props.params.id)}/>
                <FavoriteCount />
            </div>
        )
    }
} 

export default CharacterDetail;