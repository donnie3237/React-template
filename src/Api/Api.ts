import axios from "axios";
import { APiURL } from "./SERVER_URL";

export function get(){
    axios.get(APiURL).then(
        (results)=>{
            return results
        }
    )
}