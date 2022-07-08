export const DB_ROOT = 'https://my-json-server.typicode.com/geraldalex/DBDelivery'

export const getApiResource = async (url ) => {

   fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

}

