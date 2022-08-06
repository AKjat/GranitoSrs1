import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:8000/api"
export default axios.create({
    baseURL: "http://localhost:8000/api"
})

export const getProductsAPI = async () => axios.get('/products')
export const getProductByIdAPI = async (id) => axios.get(`/products/${id}`)

export const createProductAPI = async (product) => axios.post('/products',product)
export const updateProductAPI = async (product) => axios.put(`/products/${product.id}`, product)
export const deleteProductByIdAPI = async (id) => axios.delete(`/products/${id}`) 


export const getCategoriesAPI = async () => axios.get('/categories')
export const getTagsAPI = async () => axios.get('/tags')
export const getUsagesAPI = async () => axios.get('/usages')
export const getProductFinishingsAPI = async () => axios.get('/finishngs')



