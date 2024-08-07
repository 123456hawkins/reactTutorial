import {  NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom"
import { getInvoices } from "../data"


function QueryNavLink({to,...props}){
    let location=useLocation()
    console.log('QueryNavLink',location);
    
    return <NavLink to={to+location.search} {...props}></NavLink>
}
export default function Invoices(){
    let Invoices=getInvoices()
    let [searchParams,setSearchParams]=useSearchParams()
    return (
    <div>
        <nav style={{
            borderRight:"solid 1px",
            padding:"1rem"
        }}>
            
            <input
                value={searchParams.get("filter")||""}
                onChange={event=>{
                    let filter=event.target.value
                    if(filter){
                        setSearchParams({filter})
                    }else{
                        setSearchParams({})
                    }
                }}
            ></input>
            {Invoices.filter(invoice=>{
                let filter=searchParams.get("filter")
                if (!filter) {
                    return true
                }
                let name=invoice.name.toLowerCase()
                return name.startsWith(filter.toLowerCase())
            }).map(invoice=>(
                <QueryNavLink
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                    style={({ isActive }) => {
                        return {
                          display: "block",
                          margin: "1rem 0",
                          color: isActive ? "red" : ""
                        };
                      }}
                    >
                    {invoice.name}
                </QueryNavLink>
            ))}
            
        </nav>
        <Outlet></Outlet>
    </div>
    )
}