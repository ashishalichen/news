import React from 'react'

function NewsCard({ info }) {
    const { urlToImage } = info
    return info && (
        <div>

            <img
                className='w-full h-48 rounded-lg'
                src={urlToImage}
            />
        </div>
    )
}

export default NewsCard