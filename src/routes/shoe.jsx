import {  useSearchParams } from "react-router-dom"

export default function Shoe(){
    let [searchParams]=useSearchParams()
    const brand=searchParams.get("brand")
    
    return (
        <div>
            鞋子品牌：{brand}
        </div>
    )
}