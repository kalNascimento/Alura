import fetch from "node-fetch";


function error(error) {
    throw new Error(error.message);
}

async function checkStatus(arrayLinks) {
    try {
        const arrayStatus = await Promise.all(arrayLinks.map(async url => {
        const response = await fetch(url);
        return response.status;
    }))
    return arrayStatus
    } catch (erro) {
        manejaErros(error);
    }
    
}

function geraArrayDeURL(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validationURLs(arrayLinks) {
    const links = geraArrayDeURL(arrayLinks);
    const statusLink = await checkStatus(links)
    const resultados = arrayLinks.map((objeto, index) => ({ 
        ...objeto, 
        statusURL: statusLink[index] 
    }))
    return resultados
}

export default validationURLs