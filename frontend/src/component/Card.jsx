import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import '../component/Card.scss'
import axios from 'axios'
import { MainContext } from '../Context/Context'

const Card = () => {
    const [data, setData] = useState([])
    const { wishlistItem, SetwishlistItem } = useContext(MainContext);

    const [searchValue, setSearchValue] = useState([])
    const [dummys, setDummy] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:6065/').then((res) => {

            setData(res.data)
        })
    }, [setSearchValue === "", dummys ? data : ''])

    return (
        <div>

            <input onChange={(e) => {
                setSearchValue(e.target.value)
                setData(data.filter((item) => item.title.includes(searchValue)))
            }} type="text" />
            <button onClick={() => {
                setData([...data.sort((a, b) => a.price - b.price)])
            }}>Sort by price</button>
            <div className="cardss">
                {

                    data.map((item, index) => {
                        return (
                            <div className="cardd">
                                <div className="cardd__img"><img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-1.png" alt="" /></div>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                                <p>{item.desc}</p>
                                <button onClick={() => {
                                    axios.delete(`http://localhost:6065/${item._id}`).then((res) => {
                                        console.log("delete");
                                        setDummy(true)
                                    })
                                }}>delete</button>
                               <button onClick={() => {
                  SetwishlistItem([...wishlistItem, item]);
                }}>Add to basket</button>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default Card
