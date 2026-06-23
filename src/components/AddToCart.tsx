"use client";


import {useCart} from "../store/cart";


export default function AddToCart({
product
}:any){


const addItem=useCart(
state=>state.addItem
);



return (

<button

onClick={()=>addItem({

...product,

quantity:1

})}

className="
bg-black
text-white
px-8
py-3
rounded
"

>

Add To Cart

</button>

)

}