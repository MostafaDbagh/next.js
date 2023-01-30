import Product from '../components/product'
export default function Home({products}) {
  return (
  <main className='container'>
    <h1>hello products</h1>
    {
      products.map(item => <Product key={item.id} products={item}/>)
    }
  </main>
  )
}

export async function getStaticProps(){
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return{
    props:{products}
  }
}
