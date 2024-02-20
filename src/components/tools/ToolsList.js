import '../../style/listStyle.css'

function ToolsList({tool_name, desc}){
    return(
        <section className='ml-9 mb-6 mt-4 w-[80%]'>
            <li className='li'>{tool_name}</li>
            <p>{desc}</p> 
        </section> 
    )
}
export default ToolsList;