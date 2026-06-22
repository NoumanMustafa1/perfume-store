import Head from "next/head";
import { CSSProperties } from "react";
import Link from "next/link";

export default function AccountPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={styles.root}>

        {/* Hero */}
        <section style={styles.hero}>
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1400&q=80&auto=format&fit=crop"
            alt="Luxury perfume"
            style={styles.heroImg}
          />

          <div style={styles.overlay} />

          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>
              NOIRÉ Private Collection
            </p>

            <h1 style={styles.heroTitle}>
              Your Account
            </h1>

            <p style={styles.heroText}>
              Manage your fragrance journey, orders, and preferences.
            </p>
          </div>
        </section>


        {/* Account Box */}
        <section style={styles.section}>

          <div style={styles.card}>

            <h2 style={styles.title}>
              Welcome Back
            </h2>

            <p style={styles.subtitle}>
              Sign in to access your collection.
            </p>


            <form style={styles.form}>


              <label style={styles.label}>
                Email Address
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                style={styles.input}
              />


              <label style={styles.label}>
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                style={styles.input}
              />


              <button style={styles.button}>
                Sign In
              </button>


            </form>


            <div style={styles.divider}/>


            <p style={styles.register}>
              New to NOIRÉ?
            </p>


            <Link
              href="/account/register"
              style={styles.create}
            >
              Create an Account
            </Link>


          </div>

        </section>


        {/* Benefits */}

        <section style={styles.benefits}>


          {[
            {
              title:"Order History",
              text:"Track your fragrance purchases."
            },
            {
              title:"Wishlist",
              text:"Save your favorite scents."
            },
            {
              title:"Exclusive Access",
              text:"Receive private collection updates."
            }

          ].map(item=>(

            <div
              key={item.title}
              style={styles.benefitCard}
            >

              <h3 style={styles.benefitTitle}>
                {item.title}
              </h3>

              <p style={styles.benefitText}>
                {item.text}
              </p>

            </div>

          ))}


        </section>


        {/* Footer */}

        <footer style={styles.footer}>

          <span style={styles.footerLogo}>
            NOIRÉ
          </span>

          <span style={styles.footerText}>
            Luxury fragrances · Since 2017
          </span>

        </footer>


      </main>
    </>
  );
}



const styles: Record<string,CSSProperties> = {


root:{
background:"#FAF8F4",
minHeight:"100vh",
color:"#1C1A17",
fontFamily:"'Jost', sans-serif"
},


hero:{
height:420,
position:"relative",
overflow:"hidden"
},


heroImg:{
width:"100%",
height:"100%",
objectFit:"cover"
},


overlay:{
position:"absolute",
inset:0,
background:
"linear-gradient(to bottom,rgba(0,0,0,.15),rgba(250,248,244,.95))"
},


heroContent:{
position:"absolute",
bottom:50,
left:0,
right:0,
textAlign:"center"
},


eyebrow:{
fontSize:"0.7rem",
letterSpacing:".25em",
textTransform:"uppercase",
color:"#9C8B6E"
},


heroTitle:{
fontFamily:"'Playfair Display',serif",
fontSize:"3rem",
fontStyle:"italic",
fontWeight:400,
margin:"10px 0"
},


heroText:{
fontFamily:"'Cormorant Garamond',serif",
fontSize:"1.2rem",
color:"#4A4540"
},


section:{
padding:"4rem 2rem",
display:"flex",
justifyContent:"center"
},


card:{
width:420,
background:"#FFFFFF",
padding:"3rem",
border:"1px solid #E4DDD4",
boxShadow:"0 20px 50px rgba(0,0,0,.08)"
},


title:{
fontFamily:"'Playfair Display',serif",
fontSize:"2rem",
textAlign:"center",
fontWeight:400
},


subtitle:{
textAlign:"center",
fontFamily:"'Cormorant Garamond',serif",
fontSize:"1.1rem",
color:"#6B6660",
marginBottom:"2rem"
},


form:{
display:"flex",
flexDirection:"column",
gap:"12px"
},


label:{
fontSize:".7rem",
letterSpacing:".15em",
textTransform:"uppercase"
},


input:{
padding:"14px",
border:"1px solid #D8D0C5",
outline:"none",
fontFamily:"'Jost',sans-serif",
background:"#FAF8F4"
},


button:{
marginTop:20,
padding:"15px",
background:"#1C1A17",
color:"#FAF8F4",
border:"none",
letterSpacing:".2em",
textTransform:"uppercase",
cursor:"pointer"
},


divider:{
height:"1px",
background:"#E4DDD4",
margin:"2rem 0"
},


register:{
textAlign:"center",
fontSize:".8rem",
color:"#6B6660"
},


create:{
display:"block",
textAlign:"center",
color:"#9C8B6E",
letterSpacing:".15em",
textTransform:"uppercase",
fontSize:".75rem",
textDecoration:"none"
},


benefits:{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"1px",
margin:"0 2.5rem 4rem",
background:"#E4DDD4"
},


benefitCard:{
background:"#FAF8F4",
padding:"2rem",
textAlign:"center"
},


benefitTitle:{
fontFamily:"'Playfair Display',serif",
fontWeight:400
},


benefitText:{
fontFamily:"'Cormorant Garamond',serif",
color:"#6B6660"
},


footer:{
background:"#1C1A17",
padding:"2rem 2.5rem",
display:"flex",
justifyContent:"space-between",
color:"#FAF8F4"
},


footerLogo:{
fontFamily:"'Playfair Display',serif",
fontStyle:"italic",
letterSpacing:".2em"
},


footerText:{
fontSize:".7rem",
letterSpacing:".15em",
textTransform:"uppercase"
}


};