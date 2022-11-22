export async function servicioCancion(){
    const URI="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"
    const TOKEN="Bearer BQAwL6KnVA6Oq4N_OUUg6dPYu7WMLUCZliy_MaALXXfDWPAGejkKp8W2zLOAVo21aLppRVoT6vh_5RlGh7Av3hpS_iJfKMB9__tN-c-mm3QSxzDddITr1M2NssW3X-iQl6m7CuTMtZ2mzHSKyVEbMr9tFUkxjzqGwFw--AlrZ_BtHxWyScbkEuY0mya2RwEW6oA"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

   let respuesta=await fetch(URI,PETICION)
   let canciones=await respuesta.json()

   return canciones
}