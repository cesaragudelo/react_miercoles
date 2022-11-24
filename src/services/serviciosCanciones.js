export async function servicioCancion(){
    const URI="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"
    const TOKEN="Bearer BQDgQTsmNCJ3HWBegp_eipTAp6J0cN6WDUhQ9c-FgU-yGGEXqrxdk-XzJDUDoTCjxNiBujJdbR3kWWY3o1boxQP6V9QkrgdI4KhFSinfSJqQVyoeRw17hUh7r3r6rpOd83N8AVDbTBAdFp4RBnAHzKCo7vZjp3yaOpk6XGQCuQV8Kje-QaVC9tJGfhhXRulpkZ4"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

   let respuesta=await fetch(URI,PETICION)
   let canciones=await respuesta.json()

   return canciones
}