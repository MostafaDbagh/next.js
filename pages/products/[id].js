
import Image from "next/image";
const SingleProduct = ({product})=>{
    return (
<>
<h1>hello safi</h1>
<Image src={product.image} width='200' height='200'/>
<h1>{product.title}</h1>
<p>{product.price}</p>
<p>{product.description}</p>
</>
    )
}
export default SingleProduct;

export async function getStaticPaths() {
    const req = await fetch("https://fakestoreapi.com/products");
    const products = await req.json();
    const paths = products.map(item =>(

      {  params:{id:item.id+''}}
    )
      
            
        
    )
    return { paths , fallback: false }

}

export async function getStaticProps(context){
    const id = context.params.id ;
    const req = await fetch('https://fakestoreapi.com/products/'+id);
    const product = await req.json();
    return {
        props:{product}
    }

}