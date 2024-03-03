import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FetchData({ cat }) {
    const [data, SetData] = useState([]);
    useEffect(() => {
        axios.get(`https://inshorts.deta.dev/news?category=${cat}`)
            .then((res) => {
                console.log(res.data.data)
                SetData(res.data.data)
            })
    }, [data ,cat])

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

export default FetchData