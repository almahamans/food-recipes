import ToolsList from "../ui/ToolsList";

function Tools({name}){
    const tools_items = [
        {id:1, name:'Saucepan', describe:`A versatile pan for boiling eggs, warming dairy, cooking grains, and reheating leftovers.`},
        {id:2, name:'Chef’s Knife', describe:`A high-quality chef’s knife is indispensable. Look for one with good weight balance, a sharp blade, and a comfortable grip.`},
        {id:3, name:'Skillet (Frying Pan)', describe:`Skillets are great for searing meat, frying eggs, and even baking giant cookies.`},
        {id:4, name:'Glass cutting board', describe:`A glass board is durable and easy on your knives.`},
        {id:5, name:'STAINLESS STEEL MIXING BOWLS', describe:`Stainless steel bowls are easy to handle and won't break, making them an excellent choice for most mixing tasks.`},
        {id:6, name:'COLANDER', describe:`Draining pasta or canned foods and rinsing vegetables is made much easier with a colander.`},
        {id:7, name:'STAINLESS STEEL COOKING SPOON', describe:`Metal spoons are easier to clean than their wooden counterparts. They are thin and sturdy, making them better for sliding under a heavy piece of cooked quash.`},
        {id:8, name:'MEASURING CUPS FOR DRY INGREDIENTS', describe:` Liquid and dry measuring cups may have the same volume but each is designed to accurately measure their respective ingredients.`},
    ]
    return(
        <section>
            <h1>{name} Tools:</h1>
            <p>Here's list of {name} tools that needed in cooking:</p>
            <ul>
               {tools_items.map((item)=>
                <ToolsList key={item.id} tool_name={item.name} desc={item.describe} />               
                )}
            </ul>
        </section>
    )
}
export default Tools;