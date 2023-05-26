import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../Context/Context'
import axios from 'axios'
const Basket = () => {
  const { wishlistItem, SetwishlistItem } = useContext(MainContext)
  useEffect = (() => {
    axios.get("http://localhost:6065/").then((res) => {
    })
  })
  return (
    <div>
        {
        wishlistItem.map((item, index) => {
          return (
            <div className="cardd">
                                <div className="cardd__img"><img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-1.png" alt="" /></div>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                                <p>{item.desc}</p>
                                
                            </div>
          )
        })
      }

    </div>
  )
}

export default Basket
