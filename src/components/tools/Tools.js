import ToolsList from "./ToolsList";
import toolsItems from './ToolsFile.json';
import '../../style/fonts.css';

function Tools({name}){
    return(
        <section className="">
            <h1 className=" textCenter text-[20px] font-sans">{name} Tools:</h1>
            {/* <p className="ml-5">Here's list of {name} tools that needed in cooking:</p> */}
            <img src="chef_tools.jpg"  height={`300em`} width={`300em`}/>
            <ul>
               {toolsItems.map((item)=>
                <ToolsList key={item.id} tool_name={item.name} desc={item.describe} />               
                )}
            </ul>
        </section>
    )
}
export default Tools;