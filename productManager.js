class ProductManager {
    constructor (){
        this.products=[]
    }
    addProduct(title,description,price, thumbnail, code, stock){
        let nuevoProducto={
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if(this.products.length===0){
            nuevoProducto.code=1
        }else{
            nuevoProducto.code=this.products[this.products.length-1].code + 1
        }
        this.products.push(nuevoProducto)
    }
    getProducts(){
        return this.products
    }
    getProductsById(codeProducto){
        let indiceProducto=this.products.findIndex(producto=>producto.code===codeProducto)
        if(indiceProducto===-1){
            console.error(`El producto ${codeProducto} no existe`)
        }else {return this.products[indiceProducto]}
    }
}
let pm=new ProductManager();
console.log(pm.getProducts())
pm.addProduct("p1", "algodon", 100, "sin imagen", 1,25)
pm.addProduct("p2", "nylon", 200, "sin imagen", 2, 24)
console.log(pm.getProducts())
console.log(pm.getProductsById(2))
pm.getProductsById(3)