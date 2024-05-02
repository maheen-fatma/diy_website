import React from "react";
import { useParams } from "react-router-dom";
function User()
{
    let {passedParam}=useParams()
    return(<>
    <div> Passed Parameter: {passedParam}</div>
    </>);
}
export default User;