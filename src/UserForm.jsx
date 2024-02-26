import {react, useId} from 'react';

const UserForm = ()=>{
    const id = useId()
     return(
        <form>
            <label htmlFor={id+"name"}>UserName :</label><br/>
            <input type="text" id={id+"name"} placeholder="Enter UserName" /><br/>
            <label htmlFor={id+"age"}>Age :</label><br/>
            <input type="text" id={id+"age"} placeholder="Enter Age" /><br/>
        </form>
     )
}
export default UserForm;