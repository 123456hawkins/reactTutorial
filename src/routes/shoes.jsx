import { Link, Outlet, useSearchParams } from "react-router-dom";

function BrandLink({brand,...props}){
    console.log('BrandLink',brand);
    
    let [params] = useSearchParams();
  let isActive = params.getAll("brand").includes(brand);
    return(
        <Link
            style={{color:isActive?'red':""}}
            to={`shoe?brand=${brand}`}
            {...props}
        >{brand}</Link>
    )
}
export default function Shoes(){
    return (
        <div>
            <nav style={{
            borderRight:"solid 1px",
            padding:"1rem"
        }}>
            <BrandLink brand={'nike'} style={{marginRight:"10"}}></BrandLink>
            <BrandLink brand={'adidas'}></BrandLink>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}