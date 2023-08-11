let btn = document.querySelector("button");             // pehle humne btn ko access liya , phir usme addeventlistener add kiya, jo click event ko use krga , uske baaad humne callback add kiya , abb hum chate hi ki getFact(); call jaye orr humhare pass ek random fact aa jaye.
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);                                  // orr jaise hi vo fact aayega use hum console krke print kra lege
    let p = document.querySelector("#result");
    p.innerText = fact;
})



let url = "https://catfact.ninja/fact";
async function getFacts() {                    //basically getfact humhara ek asyncronous function hi to humne btn ko bhi async bna diya  // orr ye getFact vala function kya krga , ye API ko call krega , orr jo bhi humhare pass result ke andar data ke andar fact hoga uuse ye return krva dega 
    try{
         let res = await axios.get(url);
         return res.data.fact;
    } catch(e) {
        console.log("error:", e);
        return "NO FACT FOUND";               // lakin agr koi err aa jaya hi to usss case me ye return krega no fact found
        } 

}