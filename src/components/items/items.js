import './items.css';
import { LuPackageOpen } from "react-icons/lu";
function Items (){
    return(
        <div className='individual-items'>
            <h1> ACOMPANHE SUAS ENCOMENDAS</h1>
            <LuPackageOpen style={{color: 'rgb(219, 222, 36)', fontSize:"90px"}}  />
        </div>
        
        

    );
}

export default Items;