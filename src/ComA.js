
import React, {createContext} from 'react';
import CompB from './CompB';

const BioData = createContext()
function  ComA(){ 
    return (
        <BioData.provider value={"data coming from Child Component Using contex"}>
            <CompB />
        </BioData.provider>
    )
    
}

export default ComA;
export { BioData }