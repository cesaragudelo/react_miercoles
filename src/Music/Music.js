import { servicioCancion } from "../services/serviciosCanciones.js"

//necesito usar el hook usesate
//para almacenar la respuesta de forma global
import {useState,useEffect} from 'react'


export function Music(){
    
//CREANDO MI PRIMER USESTATE
const[canciones,setCanciones]=useState(null)
const[estamosCargando,setEstamosCargando]=useState(true)

//USANDO MI PRIMER USE EFECT
useEffect(function(){
    servicioCancion()
    .then(function(respuesta){
       setCanciones(respuesta)
       setEstamosCargando(false)
    })
},[])
console.log(canciones)
   if(estamosCargando==true){
        return(
            <>
                <h1>Estamos cargando...</h1>
            </>
        )
   }else{
    return(
        
        <>
            <h1>estan listas las canciones</h1>
            <div className="row row-cols-1 row-cols-md-3 g-0 mt-5">
            {
                canciones.tracks.map(function(cancion){
                    return(
                        //<h5>{cancion.name}</h5>
                        //cancion.preview-url
                        <>
                        <div className="col- mt-3 bg-dark p-5">
                            <div className="card h-100">
                                <img src={cancion.album.images[0].url} alt="" className="img-fluid w-100 h-100"/>
                                <h4 className="text-center ">
                                    Nombre cancion: {cancion.name}
                                </h4>
                                <audio controls="controls"src={cancion.preview_url} >{}</audio>
                               
                            </div>
                        </div>
                        </>


            




                        
                    )
                })
            }

    </div>
                             


        </>
    )
    
   }
}