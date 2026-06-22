import { prisma } from "../../../lib/prisma";


export default async function ProductPage({
params
}:{
params:{slug:string}
}){


const product =
await prisma.product.findUnique({
where:{
slug:params.slug
}
});


if(!product)
return <h1>Not Found</h1>


return (

<div className="grid md:grid-cols-2 gap-10 p-10">


<img
src={product.image}
className="rounded-xl"
/>


<div>

<h1 className="text-5xl">
{product.name}
</h1>


<p className="mt-5">
{product.description}
</p>


<h2 className="text-3xl mt-5">
${product.price}
</h2>


<button
className="mt-8 bg-black text-white px-8 py-3 rounded">

Add To Cart

</button>


</div>


</div>

)

}