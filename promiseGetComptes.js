console.log("Debut traitement ...");

/* getUser(12).then((user) => {
    console.log(user) ; 

    getComptes(user.id).then( (comptes)=>{
        console.log(comptes);
    }); 
});
 */
//ou bien 
getUser(12).then((user) => {
    console.log(user) ; 
    return getComptes(user.id);
    
}).then((comptes)=>{
    console.log(comptes);
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

function getComptes(PDO) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" Ramener les comptes de PDO de la centrale ....." )
            resolve( ['compte 1','compte 2','compte 3'])
        }, 2000);
    });
} 

