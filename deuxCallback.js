console.log("Debut traitement ...");

 getUser(12, (user)=>{
    console.log( user);
    getComptes(user.id, (comptes)=>{
        console.log(comptes)
    })
   
});

console.log("Fin traitement ...");

function getUser(PDO, callback) {
    setTimeout(() => {
        console.log(" Ramener les donnees du PDO de la BD....." )
        callback( {id: PDO, username: "Mohamed"})
    }, 2000);

}

function getComptes(PDO, callback) {
    setTimeout(() => {
        console.log(" Ramener les comptes de PDO de la BD....." )
        callback( ['compte 1','compte 2','compte 3'])
    }, 2000);

}