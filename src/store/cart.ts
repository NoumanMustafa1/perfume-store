import {create} from "zustand";


interface CartItem{

id:number;
name:string;
price:number;
image:string;
quantity:number;

}



interface CartStore{

items:CartItem[];

addItem:(item:CartItem)=>void;

removeItem:(id:number)=>void;

}



export const useCart=create<CartStore>((set)=>({

items:[],


addItem:(item)=>

set((state)=>({

items:[
...state.items,
item
]

})),



removeItem:(id)=>

set((state)=>({

items:
state.items.filter(
(item)=>item.id!==id
)

}))


}));