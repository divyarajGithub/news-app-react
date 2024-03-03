import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './newcard.css'

function NewsCard() {
    const [data, SetData] = useState([]);
    useEffect(() => {
        axios.get(" https://inshorts.deta.dev/news?category=all")
            .then((res) => {
                SetData(res.data.data)
            })
    }, [data])

    return (
        <div>
            {data.map((items) => (
                <>
                    <div className='container shadowEffect'>
                        <div>
                            <img src={`${items.imageUrl}`} className='imageStyle' style={{ width: '200px' }} />
                        </div>
                        <div className='newsSection'>
                            <h5>{items.title}</h5>
                            <p>
                                {items.content}
                            </p>
                            <a href={`${items.readMoreUrl}`} target='_blank'>Read More</a>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default NewsCard