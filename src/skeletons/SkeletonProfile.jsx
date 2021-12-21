import React from 'react'
import Skeletons from './Skeletons'

export const SkeletonProfile = ({theme}) => {
    const themeClass = theme || 'light'
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-profile">
          <div>
            <Skeletons type="avatar" />
          </div>
          <div>
            <Skeletons type="title" />
            <Skeletons type="text" />
            <Skeletons type="text" />
          </div>
        </div>
      </div>
    )
}
