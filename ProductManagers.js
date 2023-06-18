class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
    }

    addProduct(title, description, thumbnail, price, code, stock){
        
        if (!title || !description || !thumbnail || !price || !code || !stock) {
            console.log("Todos los campos deben ser completados")
            return
          }

        const CodeRepeat = this.products.every(product => product.code !== code)
          
        if (!CodeRepeat) {
            console.log(`El código "${code}" ya esta en uso.`)
            return
        }

        let newId;
        if(!this.products.length){
            newId=1;
        }else{
            newId = this.products[this.products.length-1].id+1
        }        
       
        const NewProducts = {
            id: newId,
            title,
            description,
            thumbnail,
            price,
            code,
            stock,
        }

        this.products.push(NewProducts)
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id)
        if (product) {
          return product
        } else {
          console.log("Producto no encontrado.");
        }
      }
}

const Manager = new ProductManager()
console.log(Manager.getProducts())
Manager.addProduct("Tomate", "Fruta","Sin imagen", 200, "A-123" , 25)
Manager.addProduct("Tomate", "Fruta","Sin imagen", 300, "B-123" , 25)
console.log(Manager.getProducts())

const product = Manager.getProductById(4);
console.log(product)

