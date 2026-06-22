import Head from "next/head";
import { CSSProperties } from "react";
import Link from "next/link";

export default function RegisterPage() {
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
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1400&q=80&auto=format&fit=crop"
            alt="Luxury fragrance"
            style={styles.heroImg}
          />


          <div style={styles.overlay}/>


          <div style={styles.heroContent}>

            <p style={styles.eyebrow}>
              NOIRÉ PRIVATE MEMBERSHIP
            </p>

            <h1 style={styles.heroTitle}>
              Create Account
            </h1>


            <p style={styles.heroText}>
              Join our world of handcrafted fragrances.
            </p>

          </div>

        </section>




        {/* Register Form */}

        <section style={styles.section}>


          <div style={styles.card}>


            <h2 style={styles.heading}>
              Begin Your Journey
            </h2>


            <p style={styles.description}>
              Create your NOIRÉ account and enjoy
              exclusive collections, saved fragrances,
              and order tracking.
            </p>



            <form style={styles.form}>


              <label style={styles.label}>
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                style={styles.input}
              />



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
                placeholder="Create password"
                style={styles.input}
              />



              <label style={styles.label}>
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Repeat password"
                style={styles.input}
              />



              <button style={styles.button}>
                Create Account
              </button>


            </form>



            <div style={styles.divider}/>


            <p style={styles.loginText}>
              Already a member?
            </p>


            <Link
              href="/account"
              style={styles.loginLink}
            >
              Sign In
            </Link>



          </div>


        </section>




        {/* Luxury Benefits */}

        <section style={styles.benefits}>


          {[
            {
              title:"Private Collections",
              text:"Early access to new fragrances."
            },
            {
              title:"Saved Favorites",
              text:"Keep your signature scents."
            },
            {
              title:"Easy Orders",
              text:"Track every purchase."
            }

          ].map((item)=>(

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




        <footer style={styles.footer}>

          <span style={styles.logo}>
            NOIRÉ
          </span>


          <span style={styles.footerText}>
            Handcrafted fragrances · Since 2017
          </span>

        </footer>



      </main>
    </>
  );
}



const styles: Record<string, CSSProperties> = {


root:{
  minHeight:"100vh",
  background:"#FAF8F4",
  color:"#1C1A17",
  fontFamily:"'Jost',sans-serif"
},


hero:{
  height:420,
  position:"relative",
  overflow:"hidden"
},


heroImg:{
  width:"100%",
  height:"100%",
  objectFit:"cover",
},


overlay:{
  position:"absolute",
  inset:0,
  background:
  "linear-gradient(to bottom,rgba(0,0,0,.2),rgba(250,248,244,.95))"
},


heroContent:{
  position:"absolute",
  bottom:45,
  left:0,
  right:0,
  textAlign:"center"
},


eyebrow:{
  fontSize:".7rem",
  letterSpacing:".3em",
  color:"#9C8B6E",
  textTransform:"uppercase"
},


heroTitle:{
  fontFamily:"'Playfair Display',serif",
  fontSize:"3rem",
  fontStyle:"italic",
  fontWeight:400,
  margin:"12px 0"
},


heroText:{
  fontFamily:"'Cormorant Garamond',serif",
  fontSize:"1.2rem",
  color:"#4A4540"
},


section:{
 padding:"4rem 1rem",
 display:"flex",
 justifyContent:"center"
},


card:{
 width:450,
 background:"#FFFFFF",
 padding:"3rem",
 border:"1px solid #E4DDD4",
 boxShadow:"0 25px 60px rgba(0,0,0,.08)"
},


heading:{
 fontFamily:"'Playfair Display',serif",
 fontSize:"2rem",
 fontWeight:400,
 textAlign:"center"
},


description:{
 textAlign:"center",
 fontFamily:"'Cormorant Garamond',serif",
 fontSize:"1.15rem",
 lineHeight:1.7,
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
 letterSpacing:".18em",
 textTransform:"uppercase",
 color:"#6B6660"
},


input:{
 padding:"15px",
 background:"#FAF8F4",
 border:"1px solid #D8D0C5",
 outline:"none",
 fontFamily:"'Jost',sans-serif"
},


button:{
 marginTop:"1rem",
 padding:"16px",
 background:"#1C1A17",
 color:"#FAF8F4",
 border:"none",
 cursor:"pointer",
 letterSpacing:".2em",
 textTransform:"uppercase",
 fontSize:".75rem"
},


divider:{
 height:"1px",
 background:"#E4DDD4",
 margin:"2rem 0"
},


loginText:{
 textAlign:"center",
 color:"#6B6660",
 fontSize:".85rem"
},


loginLink:{
 display:"block",
 textAlign:"center",
 marginTop:".8rem",
 color:"#9C8B6E",
 textDecoration:"none",
 letterSpacing:".2em",
 textTransform:"uppercase",
 fontSize:".75rem"
},


benefits:{
 display:"grid",
 gridTemplateColumns:"repeat(3,1fr)",
 margin:"0 2.5rem 4rem",
 gap:"1px",
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
 color:"#6B6660",
 fontSize:"1.05rem"
},


footer:{
 background:"#1C1A17",
 color:"#FAF8F4",
 padding:"2rem 2.5rem",
 display:"flex",
 justifyContent:"space-between",
 alignItems:"center"
},


logo:{
 fontFamily:"'Playfair Display',serif",
 fontStyle:"italic",
 letterSpacing:".25em"
},


footerText:{
 fontSize:".7rem",
 letterSpacing:".15em",
 textTransform:"uppercase"
}


};