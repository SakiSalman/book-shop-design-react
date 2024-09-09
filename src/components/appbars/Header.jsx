import React from 'react'
import useWindowSize from '../../utils/useWindowSize'
import HeaderPC from './HeaderPC'
import HeaderPn from './HeaderPn'

const Header = () => {
    const {isMobile} = useWindowSize()
    return (
      <div>
        {
          !isMobile ? <HeaderPC/> : <HeaderPn/>
        }
      </div>
    )
}

export default Header