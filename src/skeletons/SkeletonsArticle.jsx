import React from 'react'
import Skeletons from '../../src/skeletons/Skeletons';

export const SkeletonsArticle = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <Skeletons type="title"/>
                <Skeletons type="text"/>
                <Skeletons type="text"/>
                <Skeletons type="text"/>
                {/* <Skeletons type="text"/>
                <Skeletons type="thumbnail"/>
                <Skeletons type="avatar"/> */}

            </div>
        </div>
    )
}
