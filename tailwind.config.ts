import type { Config } from "tailwindcss";


const config: Config = {

content:[
"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],


theme:{

extend:{

fontFamily:{

serif:[
"Playfair Display",
"serif"
],

body:[
"Jost",
"sans-serif"
],

},

colors:{

noire:{

black:"#0b0908",

dark:"#11100e",

gold:"#c9a96e",

cream:"#f7f2e8"

}

}

}

},


plugins:[],


};


export default config;