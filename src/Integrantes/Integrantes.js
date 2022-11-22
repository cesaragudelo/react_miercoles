export function Integrantes(){

let integrantes=[
    {
        nombre:"noodle",
        instrumento:"guitarra",
        edad:"32",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/gorillaz2d.jpg?alt=media&token=0a4d193d-42d1-4161-8122-bf076c109685"
    },
    {
        
        nombre:"murdoc",
        instrumento:"cantante",
        edad:"56",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/gorillas_3.jpg?alt=media&token=4b030c65-880e-472d-99f5-1a774859800d"
    },
    {
        
        nombre:"niccals",
        instrumento:"bajista",
        edad:"56",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/gorillas_4.jpg?alt=media&token=b3b60dde-2136-47c6-aeb0-7f13d5ad1838"
    },
    {
        
        nombre:"Russel",
        instrumento:"baterista",
        edad:"48",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/gorillas_2.jpg?alt=media&token=56b84b16-6452-4b57-a7b6-8e6549ff3acc"
    }
]




    return(
       <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">

        {
            integrantes.map(function(integrante){
                return(
                    <>
                    <div className="col- mt-3 bg-dark p-5">
                        <div className="card h-100">
                            <img src={integrante.fotografia} alt="" className="img-fluid w-100 h-100"/>
                            <h4 className="text-center ">
                                {integrante.nombre}
                            </h4>
                            <br/>
                            <h5 className="text-center">
                                Edad: {integrante.edad}
                            </h5>
                            <h5 className="text-center">
                               Rol {integrante.instrumento}
                            </h5>
                        </div>
                    </div>
                    </>
                )
            })
        }

       </div>
    )
}