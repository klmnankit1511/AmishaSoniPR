import React from "react"

export default function Number(props){
    return(
        <div>
            {/* <input type="text" placeholder="Amisha Soni"></input>
            <input type="text" placeholder="Amisha Soni1"></input>
            <input type="text" placeholder="Amisha Soni2"></input>
            <input type="text" placeholder="Amisha Soni3"></input>
            <input type="text" placeholder="Amisha Soni4"></input> */}
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </div>
    )
}