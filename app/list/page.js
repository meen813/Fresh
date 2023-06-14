export default function List() {
    let product = ['tomatoes', 'pasta', 'coconut']

    return (
        <div>
            <h4 className="title">Product List</h4>
            {
                product.map((a, i)=>{
                    return (
                        <div className="food" key ={i}>
                            <h4>{a} : $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

