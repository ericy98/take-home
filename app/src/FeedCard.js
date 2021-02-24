import React from 'react';

function FeedCard(props) {
    return (
        <div>
            <div className="img">
                <img alt={props.name} src={props.image} />
            </div>
            <div className= "content">
                
            </div>
        </div>
    )
}