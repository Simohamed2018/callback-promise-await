
function getMembre(PDO) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(" Ramener les donnees du PDO de la BD....." )
                resolve( {id: PDO, membreName: "Mohamed"})
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

async function run(){
const member = await getMembre(700078965);
console.log(member);

}

async function runComptes(){
    const member = await getMembre(700078965);
    console.log(member);
    const comptes = await getComptes(member.pdo);
    console.log(comptes);
    
    }

//execution

console.log("Debut traitement ...");
runComptes();
console.log("Fin traitement ...");