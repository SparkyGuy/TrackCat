import "./seachBar.css"
import { MdSearch } from "react-icons/md";



function SearchBar (){
    return(
<div className="searchbar">
    <div className="button-container">
        <input className="input"
                 type="text"
                    placeholder="PC123456789BR" />
        <button className="button"><MdSearch style = {{backgroundColor: 'rgb(219, 222, 36)', color:"rgb(23, 23, 69)", fontSize: "30px"}}/></button>
    </div>
</div>
    );

}

export default SearchBar;