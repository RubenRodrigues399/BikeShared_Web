export function cleanNS2Obj(obj) {
    const novoObj = {};
    for (const chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            const novaChave = chave.replace('ns2:', '');
            novoObj[novaChave] = obj[chave];
        }
    }
    return novoObj;
}