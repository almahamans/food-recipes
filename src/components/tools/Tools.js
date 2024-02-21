import ToolsList from "./ToolsList";
import toolsItems from './ToolsFile.json';
import '../../style/fonts.css';
import chefTools from './chef-tools-names.jpg'

function Tools({name}){
    return(
        <section className="">
            <h1 className=" textCenter text-[20px] font-sans">{name} Tools:</h1>
            {/* <p className="ml-5">Here's list of {name} tools that needed in cooking:</p> */}
            <img src={chefTools} alt='chef_tools' height={`70%`} width={`80%`} className="mx-auto my-7" />
            <ul>
               {toolsItems.map((item)=>
                <ToolsList key={item.id} tool_name={item.name} desc={item.describe} />               
                )}
            </ul>
        </section>
    )
}
export default Tools;