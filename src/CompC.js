
import React, { useContext } from 'react';
import BioData from './ComA'

function CompC() {

    const contextData = useContext(BioData)
    return (
        <div>
            <h1>Hi {contextData}</h1>
        </div>
    );
}

export default CompC;