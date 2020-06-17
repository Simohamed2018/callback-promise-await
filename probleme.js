console.log("Debut traitement ...");

const user = getUser(12);

console.log( user);

console.log("Fin traitement ...");

function getUser(id) {
    setTimeout(() => {
        console.log(" Ramener les donnees de la BD....." )
        return {id: id, username: "Mohamed"}
    }, 2000);

}