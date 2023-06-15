
function Products(){
    return(
        <>

            <div className="flex items-center justify-center mb-8">
                <h1 className="text-white bg-gray-950 p-2 text-3xl tracking-wider font-bold border mt-10 ">Available Products</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 text-black pb-4">
                <div>
                    <h4 className="tracking-widest font-semibold text-xl">Iconic</h4>
                    <p className="mt-2">Air Force 1</p>
                    <p className="mt-2">King Crown</p>
                    <p className="mt-2">Air Max 90</p>
                    <p className="mt-2">Air Max 95</p>
                </div>
                <div>
                    <h4 className="tracking-widest font-semibold text-xl">Shoes</h4>
                    <p className="mt-2">All Shoes</p>
                    <p className="mt-2">Custom Shoes</p>
                    <p className="mt-2">Nike Shoes</p>
                    <p className="mt-2">Adidas Shoes</p>
                </div>
                <div>
                    <h4 className="tracking-widest font-semibold text-xl">Clothing</h4>
                    <p className="mt-2">All Clothing</p>
                    <p className="mt-2">Modest Wear</p>
                    <p className="mt-2">Huddies & Pullovers</p>
                    <p className="mt-2">Shirts and Tops</p>
                </div>
                <div>
                    <h4 className="tracking-widest font-semibold text-xl">Kids</h4>
                    <p className="mt-2">Infants & Toddlers Shoes</p>
                    <p className="mt-2">Kid's Shoes</p>
                    <p className="mt-2">Air Max 90</p>
                    <p className="mt-2">Air Max 95</p>
                </div>
            </div>
        </>
    )
}

export default Products;