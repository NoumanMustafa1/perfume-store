"use server";

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

// src\lib\prisma.ts
export async function createProduct(data:any){

await prisma.product.create({
data:{
name:data.name,
slug:data.slug,
description:data.description,
price:Number(data.price),
image:data.image,
category:data.category,
stock:Number(data.stock)
}
});


revalidatePath("/shop");
revalidatePath("/admin/products");

}



export async function deleteProduct(id:number){

await prisma.product.delete({
where:{
id
}
});


revalidatePath("/admin/products");
revalidatePath("/shop");

}