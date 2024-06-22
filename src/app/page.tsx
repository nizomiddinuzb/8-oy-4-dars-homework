import Link from "next/link";

const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

async function Home() {
  const data = await request("https://dummyjson.com/products");
  console.log(data);
  return (
    <div>
      <div className="text-center text-2xl flex flex-wrap justify-between w-[1110px] mx-auto">
        {data.products.map((item:any,index:number) => {
          return (
            <Link key={index} className="border-solid border-2 border-sky-500 mb-4 rounded-2xl" href={`/product/${item.id}`}>
              <img className="w-[400px] h-[400px]" src={item.images} alt="" />
              <h1>{item.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
