import React from 'react'
import './cover.css'

export default function Cover() {
    return (
        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column" >
            <img
                className="cover-img"
                src="src/assets/thumbnail.jpeg"
                alt=""
            /><h1 className='heading'>Dales View Riding Centre</h1>
        </div>

    )
}