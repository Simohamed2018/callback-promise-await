console.log("Debut traitement ...");

 getUser(12, (data)=>{
    console.log( data);
   
});

console.log("Fin traitement ...");

function getUser(id, callback) {
    setTimeout(() => {
        console.log(" Ramener les donnees de la BD....." )
        callback( {id: id, username: "Mohamed"})
    }, 2000);

}