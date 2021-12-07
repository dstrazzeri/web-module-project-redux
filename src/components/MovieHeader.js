import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleFaves } from '../actions/favoritesActions';

const MovieHeader = (props) => {
    // const appTitle = "";
    // const displayFavorites = true;
    
    const handleToggle = () => {
        props.toggleFaves()
    }
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{props.appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span onClick={handleToggle}>{ props.displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return({
        appTitle: state.appTitle,
        // displayFavorites: state.favoriteState.displayFavorites
    })
}
export default connect(mapStateToProps)(MovieHeader);