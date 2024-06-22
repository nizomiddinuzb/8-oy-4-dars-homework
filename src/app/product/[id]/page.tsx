type ParamsInterface = {
  params: {
    id: number;
  }
}

const request = async (id: number) => {
  const req = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await req.json();

  return data;
}

async function SingleProduct({ params }: ParamsInterface) {
  const product = await request(params.id);
  console.log(product); 
  return (
    <div className="items-center text-center w-[600px] h-[600px] mx-auto border-2 rounded-2xlg">
      <img className="ml-32" src={product.thumbnail} alt={product.title} />
      <h1 className="text-3xl mb-2">{product.title}</h1>
      <h2 className="text-2xl">{product.description}</h2>
      <h2 className="text-4xl">{product.brand} - Brendiga mansub</h2>
    </div>
  )
}

export default SingleProduct;
