"use client";


import {deleteProduct}
from "../../actions/product";

// src\actions\product.ts
export default function DeleteButton({
id
}:{
id:number
}){


return (

<button

onClick={async()=>{

await deleteProduct(id)

}}

className="
bg-red-600
text-white
px-4
py-2
rounded">

Delete

</button>

)

}