import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export default function Footer(props) {
    let card = {
        position: "relative",
        top: "50vh",
        width:"100%",
    }
    return (
        <>
            <div className="card-header bg-dark text-light"  style={card}>
        Application Created by {props.name}
    </div>
    </>
    )
}
Footer.defaultProps = {
    name : "Creator"
}
Footer.propTypes = {
    name : PropTypes.string
}
