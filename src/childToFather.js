import { useState } from "react"

// 子传父
function ChildModule({onActive}){
    const [status,setStatus]=useState(false)
    const handleClick=()=>{
        setStatus(!status)
        onActive(status)
    }
    return (
        <>
        <button onClick={handleClick}>控制父组件隐藏或者显示</button>
        </>
    )
}
export function TestCtoFMoudle(){
    
    const [fStatus,setFStatus]=useState(false)
    const childTextFn=(status)=>{
        setFStatus(status)
        
        return
    }
    return (
     <div style={{width:200,height:200,border:'5px solid black'}}>
     <ChildModule onActive={childTextFn}></ChildModule>
     <p>子传父的数据</p>
     {fStatus?<div>显示数据</div>:null }
     </div>   
    )
}