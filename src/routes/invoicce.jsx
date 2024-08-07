import { useNavigate, useParams } from "react-router-dom"
import { deleteInvoice, getInvoiceItem } from "../data"
export default function Invoice(){
    let params=useParams()
    let obj=getInvoiceItem(parseInt(params.invoiceId,10) )
    let navigate=useNavigate()
    return (<div>
        <h4>票据编号：{obj.number}</h4>
        <h4>票据名称：{obj.name}</h4>
        <h4>票据数量：{obj.amount}</h4>
        <h4>票据日期：{obj.due}</h4>
        <button onClick={()=>{
            deleteInvoice(obj.number)
            navigate("/invoices")
        }}>删除该票据</button>
    </div>)
}