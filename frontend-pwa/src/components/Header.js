import React from 'react'

const Header = (props) => {
    return (
        <h3 className="text-xl md:text-2xl font-bold uppercase mb-2">{props.text}</h3>
    )
}

export default Header