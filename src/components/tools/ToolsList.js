import '../../style/listStyle.css'

function ToolsList({tool_name, desc}){
    return(
        <section className='mb-6 mt-4 xs:text-[14px]'>
            <li className='li'>{tool_name}</li>
            <p className='xs:mr-3 ml-5'>{desc}</p> 
        </section> 
    )
}
export default ToolsList;