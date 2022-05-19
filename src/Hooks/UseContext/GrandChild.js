import react, { useContext } from "react";
import {Contex} from './Parent'

const GrandChild =() => {
    const val = useContext(Contex);
    return(<>
        </>);
}

export default GrandChild;