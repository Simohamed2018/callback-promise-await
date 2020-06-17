
// declaration de la promise
const p = new Promise((resolve, reject) => {
    const troisEnfant = true;
    const msg = ' on va se marrier  dans cette ';
    if(troisEnfant)
        resolve( { message : msg , date : '2060-03-05' });
    else
        reject(new Error('pas d"enfant pas de mariage'));
})

//consommation de la promise

//dans le cas favorable on a le then 
p.then((message ) => console.log('resolve ',message))
.catch((err)      => console.log('reject ',err.message) );