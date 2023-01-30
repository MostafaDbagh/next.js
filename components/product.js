import Image from "next/image";
import Link from "next/link";
import { title } from "process";
const Product  = ({products})=>{
    const {title,price,image,id} = products;
    return (
<div className="product">
    <div>
        <Image src={image} width="200" height="300"/>

    </div>
    <ul>
        <li>{title}</li>
        <li>{price}</li>
    </ul>
    <Link href={`/products/${id}`}>more Details</Link>
    </div>
    )
}
export default Product;