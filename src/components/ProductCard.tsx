import Link from "next/link";


interface ProductProps{

product:{
id:number;
name:string;
slug:string;
price:number;
image:string;
}

}



export default function ProductCard({
product
}:ProductProps){


return (

<div className="group">


<Link href={`/product/${product.slug}`}>


<div className="overflow-hidden rounded-xl bg-gray-100">


<img
src={product.image}
alt={product.name}
className="
h-80
w-full
object-cover
transition
duration-500
group-hover:scale-110
"
/>


</div>



<h2 className="mt-4 text-xl font-serif">

{product.name}

</h2>



<p className="text-gray-500">

${product.price}

</p>


</Link>


</div>

)

}