"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";


const NAV_LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/collections",
    label: "Collections",
  },
  {
    href: "/custom-perfume",
    label: "Custom Perfume",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];


interface NavbarProps {
  cartCount?: number;
}


export default function Navbar({
  cartCount = 0,
}: NavbarProps) {


  const pathname = usePathname();

  const [query,setQuery] = useState("");

  const [mobileOpen,setMobileOpen] = useState(false);



  return (

<header style={s.root}>


{/* Top Utility Bar */}

<div style={s.utilityBar}>


<span style={s.utilityText}>
Free shipping on orders over $150
</span>


<Link
href="/store-locator"
style={s.utilityLink}
>
Store locator
</Link>


<div style={s.utilitySep}/>


<Link
href="/"
style={s.utilityLink}
>
EN / USD
</Link>


</div>





{/* Main Navbar */}


<div style={s.mainRow}>


{/* Mobile menu */}

<button
style={s.mobileBtn}
onClick={()=>setMobileOpen(!mobileOpen)}
>

{
mobileOpen
?
<X size={22}/>
:
<Menu size={22}/>
}

</button>





{/* Search */}


<div style={s.searchWrap}>


<Search size={15} color="#B0ABA4"/>


<input

value={query}

onChange={(e)=>setQuery(e.target.value)}

placeholder="Search fragrances..."

style={s.searchInput}

/>


</div>





{/* Logo */}

<Link
href="/"
style={s.logo}
>

NOIRÉ

</Link>






{/* Actions */}


<div style={s.actions}>


<Link
href="/account"
style={s.iconBtn}
>

<User size={18}/>

</Link>



<div style={s.actionSep}/>



<Link
href="/cart"
style={s.cartBtn}
>


<ShoppingBag size={18}/>


{
cartCount > 0 &&
<span style={s.badge}>
{cartCount}
</span>
}


</Link>



</div>



</div>







{/* Desktop Navigation */}


<nav style={s.navRow}>


{
NAV_LINKS.map(({href,label})=>{


const active =
href === "/"
?
pathname === "/"
:
pathname.startsWith(href);



return (

<Link

key={href}

href={href}

style={{

...s.navLink,

color:
active
?
"#FAF8F4"
:
"#B0ABA4",

borderBottomColor:
active
?
"#C9A96E"
:
"transparent"

}}

>


{label}


</Link>

)

})

}



</nav>







{/* Mobile Navigation */}


{
mobileOpen && (

<nav style={s.mobileMenu}>


{
NAV_LINKS.map(({href,label})=>(


<Link

key={href}

href={href}

onClick={()=>setMobileOpen(false)}

style={s.mobileLink}

>

{label}

</Link>


))

}


</nav>

)

}



</header>

  );

}







const s = {


root:{

background:"#0A0A09",

fontFamily:"'Jost', sans-serif",

width:"100%",

},



utilityBar:{


display:"flex",

alignItems:"center",

justifyContent:"flex-end",

gap:"1.5rem",

padding:"0.55rem 2.5rem",

borderBottom:
"1px solid rgba(255,255,255,.06)",


},



utilityText:{


marginRight:"auto",

fontSize:"0.62rem",

letterSpacing:".16em",

textTransform:"uppercase",

color:"#6B6660",


},



utilityLink:{


fontSize:"0.62rem",

letterSpacing:".16em",

textTransform:"uppercase",

color:"#6B6660",

textDecoration:"none",


},



utilitySep:{


width:"1px",

height:"12px",

background:"rgba(255,255,255,.12)",


},





mainRow:{


display:"flex",

alignItems:"center",

justifyContent:"space-between",

padding:"1.2rem 2.5rem",

position:"relative",


},





searchWrap:{


display:"flex",

alignItems:"center",

gap:".6rem",

background:"rgba(255,255,255,.05)",

border:"1px solid rgba(255,255,255,.1)",

padding:".5rem 1rem",

width:"230px",


},



searchInput:{


background:"transparent",

border:"none",

outline:"none",

color:"#fff",

width:"100%",

fontSize:".75rem",


},





logo:{


position:"absolute",

left:"50%",

transform:"translateX(-50%)",

fontFamily:"'Playfair Display',serif",

fontStyle:"italic",

fontSize:"1.6rem",

letterSpacing:".3em",

color:"#C9A96E",

textDecoration:"none",


},





actions:{


display:"flex",

alignItems:"center",

gap:"1.2rem",


},



iconBtn:{


color:"#B0ABA4",

display:"flex",

},



actionSep:{


width:"1px",

height:"15px",

background:"rgba(255,255,255,.1)",


},



cartBtn:{


position:"relative",

color:"#B0ABA4",

display:"flex",

},



badge:{


position:"absolute",

top:"-8px",

right:"-8px",

background:"#C9A96E",

color:"#000",

width:"16px",

height:"16px",

fontSize:"10px",

borderRadius:"50%",

display:"flex",

alignItems:"center",

justifyContent:"center",

},





navRow:{


display:"flex",

justifyContent:"center",

gap:"2.5rem",

padding:".8rem",

borderTop:
"1px solid rgba(255,255,255,.06)",


},




navLink:{


fontSize:".72rem",

letterSpacing:".16em",

textTransform:"uppercase",

textDecoration:"none",

paddingBottom:"4px",

borderBottom:"1px solid transparent",

},




mobileBtn:{


display:"none",

background:"none",

border:"none",

color:"#C9A96E",


},



mobileMenu:{


display:"flex",

flexDirection:"column",

gap:"1.5rem",

padding:"2rem",

background:"#0A0A09",


},



mobileLink:{


color:"#FAF8F4",

textDecoration:"none",

fontSize:".8rem",

letterSpacing:".15em",

textTransform:"uppercase",

}



};