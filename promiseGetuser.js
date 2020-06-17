console.log("Debut traitement ...");

getUser(12).then((user) => {
    console.log(user)   
});
 

console.log("Fin traitement ...");

function getUser(PDO) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(" Ramener les donnees du PDO de la BD....." )
                resolve( {id: PDO, username: "Mohamed"})
            }, 2000);
});
}

/* function getComptes(PDO, callback) {
    setTimeout(() => {
        console.log(" Ramener les comptes de PDO de la BD....." )
        callback( ['compte 1','compte 2','compte 3'])
    }, 2000);

} */

/* getUser(12, (user)=>{
    console.log( user);
    getComptes(user.id, (comptes)=>{
        console.log(comptes)
    })
   
}); */
