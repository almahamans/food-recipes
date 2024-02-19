import Tools_list from "./Tools_list";

function Tools({name}){
    const tools_items = [
        {id:1, name:'knife'}
    ]
    return(
        <section>
            <h2>{name} Tools:</h2>
            <p>Here's list of {name} tools that needed in cooking:</p>
            <ul>
               {tools_items.map((item)=>
                <Tools_list key={item.id} tool_name={item.name} />               
                )}
            </ul>
        </section>
    )
}
export default Tools;