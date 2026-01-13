
import axios from 'axios'

const url="http://localhost:8080/products"
export async function getProductsApi(){
    let data=await axios.get(url);
    return data;
}

export async function deleteProductApi(id){
    await axios.delete(`${url}/${id}`);
}

export async function postProductApi(product){
    await axios.post(url,product,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

export async function updateProduct(product){
    await axios.put(url,product,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}