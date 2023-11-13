import React, { FC } from 'react'

const Wrapper = ({ children }) => {
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            {children}
        </div>
    )
}

export default Wrapper