function Tools_list({tool_name, img}){
    return(
        <section>
            <li>{tool_name}</li>
            <li><img src={img} alt="tool image" /></li>
        </section>
    )
}
export default Tools_list;