
export default function Cart() {
    let 장바구니 = ['tomatoes', 'pasta']
    return (
        <div>
            <h4 className="title">Cart</h4>

            <div>
                <CartItem item = {장바구니[0]}></CartItem>
                <CartItem item = {장바구니[1]}></CartItem>
                <Banner content="롯데카드"/>
                <RedBtn color = "red"></RedBtn>
                <RedBtn color = "blue"></RedBtn>

            </div>
        </div>
    )
}

//component
function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Banner(props){
    return <h5>{props.content} 결제 행사중</h5>
}

function RedBtn(props){
    return <button style={{background : props.color}}>Red Button</button>
}