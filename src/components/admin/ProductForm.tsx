"use client";


import {createProduct}
from "../../actions/product";

import {useState} from "react";


export default function ProductForm(){


const [form,setForm]=useState({

name:"",
slug:"",
description:"",
price:"",
image:"",
category:"",
stock:""

});


function update(e:any){

setForm({

...form,

[e.target.name]:e.target.value

})

}



return (

<form

action={async()=>{

await createProduct(form)

}}

className="grid gap-5 max-w-xl">


<input
name="name"
placeholder="Name"
onChange={update}
className="border p-3"
/>


<input
name="slug"
placeholder="Slug"
onChange={update}
className="border p-3"
/>



<textarea
name="description"
placeholder="Description"
onChange={update}
className="border p-3"
/>



<input
name="price"
placeholder="Price"
onChange={update}
className="border p-3"
/>



<input
name="image"
placeholder="Image URL"
onChange={update}
className="border p-3"
/>



<input
name="category"
placeholder="Category"
onChange={update}
className="border p-3"
/>



<input
name="stock"
placeholder="Stock"
onChange={update}
className="border p-3"
/>



<button

className="
bg-black
text-white
p-3
rounded">

Create Product

</button>


</form>

)

}