// let btn=document.querySelector("#btn")
// let jokeElement=document.querySelector("#joke")
// let apiKey="YyBg48cg5gd7xCB7Qt+z8g==RUbUu0xyoODAyko2"
// let option={
//     method: "GET",
//     headers: { 'X-Api-Key': apiKey},
// }
// let apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"

// async function getJoke(){
//     try {
//     jokeElement.innerText=" updating..."
//     btn.disabled= true
//     btn.innerText="loading..."
//     const response= await fetch (apiURL, option)
//     const data= await response.json();
//     btn.disabled= false
//     btn.innerText="tell me a joke"
//     jokeElement.innerText= data[0].joke 
//     } catch (error) {
//         jokeElement.innerText=" an error happend. please try again later..."
        
//     }
    
// }
// btn.addEventListener("click", getJoke)

const btn=document.querySelector("#btn");
const joke=document.querySelector("#joke");
const apiKey= "YyBg48cg5gd7xCB7Qt+z8g==RUbUu0xyoODAyko2";
const option={
    method: "GET", 
    headers: {'X-Api-Key':apiKey}};
const reqURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJokes(){
    try {
        joke.innerText="Loading..."
        btn.disabled= true
        joke.innerText="wait..."
        const response= await fetch(reqURL, option);
        const data= await response.json();
        btn.disabled= false
        btn.innerText= "tell me another joke"
        joke.innerText= data[0].joke
    } catch (error) {
        "error just came up"
    }
}



btn.addEventListener("click",getJokes )