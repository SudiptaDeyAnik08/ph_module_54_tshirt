import React from 'react'
import Special from '../Special/Special'

function Myself({ house,ring }) {
    return (
        <div>
            <h4>MySelf</h4>
            <p><small>House: {house}</small></p>
            <section>

                <Special ring={ring} ></Special>
            </section>
        </div>
    )
}

export default Myself