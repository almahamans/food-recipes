import ToolsList from "./ToolsList";
import toolsItems from './ToolsFile.json';
import '../../style/fonts.css';
import chefTools from './chef-tools-names.jpg'

function Tools({name}){
    return(
        <section className="container mx-auto">
            <h1 className="textCenter text-[20px] font-sans">{name} Tools:</h1>
            <img src={chefTools} alt='chef_tools' height={`auto`} width={`auto`} className="my-7 xs:w-[95%] xs:mx-auto" />
            <p className="ml-9 text-red-800 font-bold">More details for some tools:</p>
            <ul>
               {toolsItems.map((item)=>
                <ToolsList key={item.id} tool_name={item.name} desc={item.describe} />               
                )}
            </ul>
        </section>
    )
}
export default Tools;