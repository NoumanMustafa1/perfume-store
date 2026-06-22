"use client";

import Link from "next/link";
import { CSSProperties } from "react";


const SHOP_LINKS = [
  { href: "/shop", label: "All Perfumes" },
  { href: "/collections", label: "Collections" },
  { href: "/custom-perfume", label: "Custom Perfume" },
  { href: "/shop?filter=new", label: "New Arrivals" },
];


const CUSTOMER_LINKS = [
  { href: "/account", label: "My Account" },
  { href: "/account/register", label: "Create Account" },
  { href: "/about", label: "Our Story" },
  { href: "/contact#faq", label: "FAQ" },
];


const SOCIAL_LINKS = [
  {
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    href: "https://pinterest.com",
    label: "Pinterest",
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
  },
];



const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/custom-perfume", label: "Custom Perfume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/account", label: "Account" },
];



export default function Footer() {

return (

<footer style={s.root}>


{/* Utility Bar */}

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




{/* Main Footer Content */}

<div style={s.mainGrid}>


{/* Brand */}

<div style={s.brandCol}>

<span style={s.logo}>
NOIRÉ
</span>


<p style={s.tagline}>
Handcrafted fragrances born from memory,
worn with intention.
</p>


<div style={s.hairline}/>


<p style={s.address}>
12 Rue du Faubourg
<br/>
Paris 75008
<br/>
<br/>
Jumeirah Bay
<br/>
Dubai
</p>


</div>





{/* Shop Links */}

<div style={s.linkCol}>

<p style={s.colHeading}>
Shop
</p>


<div style={s.colLinks}>

{
SHOP_LINKS.map(item=>(

<Link
key={item.href}
href={item.href}
style={s.link}
>

{item.label}

</Link>

))
}

</div>

</div>





{/* Customer */}

<div style={s.linkCol}>

<p style={s.colHeading}>
Customer
</p>


<div style={s.colLinks}>


{
CUSTOMER_LINKS.map(item=>(

<Link
key={item.href}
href={item.href}
style={s.link}
>

{item.label}

</Link>

))
}


</div>

</div>






{/* Social */}

<div style={s.linkCol}>

<p style={s.colHeading}>
Follow
</p>


<div style={s.colLinks}>


{
SOCIAL_LINKS.map(item=>(

<a
key={item.label}
href={item.href}
target="_blank"
rel="noopener noreferrer"
style={s.link}
>

{item.label}

</a>

))
}


</div>

</div>


</div>






{/* Main Navigation */}

<nav style={s.navRow}>


{
MAIN_LINKS.map(item=>(

<Link
key={item.href}
href={item.href}
style={s.navLink}
>

{item.label}

</Link>

))
}


</nav>







{/* Bottom */}

<div style={s.bottomBar}>


<span style={s.bottomText}>
© 2026 NOIRÉ. All rights reserved.
</span>



<div style={s.legalLinks}>


<Link
href="/privacy"
style={s.legalLink}
>
Privacy Policy
</Link>


<div style={s.utilitySep}/>


<Link
href="/terms"
style={s.legalLink}
>
Terms Of Use
</Link>


</div>


</div>


</footer>

);

}





const s: Record<string,CSSProperties> = {


root:{
background:"#0A0A09",
fontFamily:"'Jost',sans-serif",
width:"100%",
},



utilityBar:{
display:"flex",
alignItems:"center",
justifyContent:"flex-end",
gap:"1.5rem",
padding:"0.55rem 2.5rem",
borderBottom:"1px solid rgba(255,255,255,.06)",
},



utilityText:{
marginRight:"auto",
fontSize:".62rem",
letterSpacing:".16em",
textTransform:"uppercase",
color:"#6B6660",
},



utilityLink:{
fontSize:".62rem",
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




mainGrid:{
display:"grid",
gridTemplateColumns:"1.6fr 1fr 1fr 1fr",
gap:"3rem",
padding:"3.5rem 2.5rem",
borderBottom:"1px solid rgba(255,255,255,.06)",
},




brandCol:{
display:"flex",
flexDirection:"column",
},



logo:{
fontFamily:"'Playfair Display',serif",
fontStyle:"italic",
fontSize:"1.6rem",
letterSpacing:".3em",
color:"#C9A96E",
marginBottom:"1rem",
},



tagline:{
fontFamily:"'Cormorant Garamond',serif",
fontSize:"1.05rem",
lineHeight:1.7,
color:"#6B6660",
},



hairline:{
width:32,
height:"1px",
background:"#C9A96E",
margin:"1.5rem 0",
},



address:{
fontSize:".72rem",
letterSpacing:".08em",
lineHeight:1.8,
color:"#6B6660",
},




linkCol:{
display:"flex",
flexDirection:"column",
},



colHeading:{
fontSize:".62rem",
letterSpacing:".2em",
textTransform:"uppercase",
color:"#FAF8F4",
marginBottom:"1.4rem",
},



colLinks:{
display:"flex",
flexDirection:"column",
gap:".9rem",
},



link:{
fontSize:".72rem",
letterSpacing:".1em",
textTransform:"uppercase",
color:"#6B6660",
textDecoration:"none",
},




navRow:{
display:"flex",
justifyContent:"center",
flexWrap:"wrap",
gap:"2.5rem",
padding:".9rem 2rem",
borderBottom:"1px solid rgba(255,255,255,.06)",
},



navLink:{
fontSize:".72rem",
letterSpacing:".16em",
textTransform:"uppercase",
textDecoration:"none",
color:"#B0ABA4",
},




bottomBar:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"1rem 2.5rem",
},



bottomText:{
fontSize:".62rem",
letterSpacing:".14em",
textTransform:"uppercase",
color:"#6B6660",
},



legalLinks:{
display:"flex",
alignItems:"center",
gap:"1rem",
},



legalLink:{
fontSize:".62rem",
letterSpacing:".14em",
textTransform:"uppercase",
color:"#6B6660",
textDecoration:"none",
},


};