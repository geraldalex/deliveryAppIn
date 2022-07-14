export const DB_ROOT = "https://my-json-server.typicode.com/geraldalex/DBDelivery/db";
export const PROXY = "https://desolate-wildwood-43607.herokuapp.com/";
 
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
 
    if (!res.ok) {
      console.error("Could not fetch", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Could not fetch", error.message);
    return false;
  }
};


