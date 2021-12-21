import React from 'react'
import Skeletons from '../../src/skeletons/Skeletons';
import Shimmer from './Shimmer';

export const SkeletonsArticle = ({theme}) => {
    const themeClass = theme || 'light'
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <Skeletons type="title"/>
                <Skeletons type="text"/>
                <Skeletons type="text"/>
                <Skeletons type="text"/>
                {/* <Skeletons type="text"/>
                <Skeletons type="thumbnail"/>
                <Skeletons type="avatar"/> */}

            </div>
            <Shimmer />
        </div>
    )
}
