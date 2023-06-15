'use client'
import Image from "next/image"
//최적화된 이미지 삽입시 1. import image from 'next/image', 2. <image/> 사용
// import food from '/public/food0.png'
import { useState } from "react"

export default function List() {
    let product = ['tomatoes', 'pasta', 'coconut']
    let [quantity, changeQuantity] = useState([0, 0, 0]) //client component 에서만 사용가능

    return (
        <div>
            <h4 className="title">Product List</h4>
            {
                product.map((a, i) => {
                    return (
                        //map 반복문 사용시 key={유니크한 값} 할당 추천
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" />
                            {/* <Image src={food} className="food-img"/> */}
                            <h4>{a} : $40</h4>
                            <span> {quantity[i]} </span>
                            <button onClick={() => {
                                let copy = [...quantity]
                                copy[i]++
                                changeQuantity(copy)
                            }}>+</button>
                            <button onClick={() => {
                                let copy = [...quantity]
                                copy[i]--
                                changeQuantity(copy)
                            }}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

