import React, { useId, useState, useEffect, useRef, useMemo}from "react";

function UsForm(){

  const divStyle = {
    height: "300px",
    overflow: "auto"
  }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setallEntry] = useState([])

  const [Count, setCount] = useState(0);

  const [add, setAdd]=useState(0);
  const [sub, setSub]=useState(100);

  const useMemoHook = useMemo(mul)

  // const id = useId();
    const cardStyle = {
        backgroundImage: 'url(images/nature4.jpg)',
        backgroundSize:'cover',
        // height : 'cover',
      }

      useEffect(()=>{
        console.log("useEffect Called..")
      },[allEntry])

      const refElm1 = useRef("");
      const refElm2 = useRef("");

      const submitForm = (e)=>{
        e.preventDefault();
        const newEntry ={name:name, password:password}
        setallEntry([...allEntry, newEntry])
        setCount(Count+1)
        refElm1.current.style.color = "blue";
        refElm2.current.style.color = "blue";
        
      }

      function reset(e){
        e.preventDefault();
        setName("");
        setPassword("");
        refElm1.current.focus();
        refElm1.current.style.color = "black";
        refElm2.current.style.color = "black";
      }

      function mul(){
        return add*10;
      }
      

    return (
        <>
        <div className='row m-2' >
            <div className="row">
              <div className='col-md-4 bg-light card'>
                <h1>Form Using React hooks</h1>
                <h3>User Form</h3>
                <div className="card text-white" style={cardStyle}>
                    <div className="card-body ">
                        <form>
                            <label htmlFor="name">Employee Name</label><br/>
                            <input type="text"  ref={refElm1} name="name" id="name" value={name}  onChange={(e)=>setName(e.target.value)}/><br/>
                            <label htmlFor="password">Designation</label><br/>
                            <input type="text" ref={refElm2}  name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
                            <button onClick={submitForm} className="btn btn-secondary m-2">Submit</button>
                            <button onClick={reset} className="btn btn-secondary m-2">Reset</button>
                        </form>
                    </div>
                </div>
              </div>
              <div className="col-md-4 card bg-secondary text-white">
                   <div class="card-header m-2 "> <h3> User Count : {Count}</h3> </div>
                    <div className="card-body ">
                      <h5 class="card-title">This Is the section Using useEffect hook</h5>
                      <p class="card-text">When you add the user in the User Form user count will updated as number of user added</p>
                    </div>
              </div>
              <div className="col-md-4 bg-dark text-white ">
                <h3>Added Users</h3>
                  <div style={divStyle} className="card m-2 p-2 bg-light">
                      {
                        allEntry.map((entry)=>{
                          return(
                            <div className="card m-2" >
                              <div className="card-body " >
                                <h5 className="card-title" >{entry.name}</h5>
                                <p className="card-text">{entry.password}</p>
                              </div>
                            </div>
                          )
                        })
                      }
                  </div>
              </div>
            </div>
            <div className="row m-2">
                <div className="row">
                    <div className="col-md-4 card bg-dark text-white">
                      <div class="card-header m-2 "> <h3> useRef Hook</h3> </div>
                        <div className="card-body">
                          <p className="card-text">In the Above User Form when you are click submit then Employee name and Designation values are becomeing Blue </p>
                          <p className="card-text">Using useRef hook we are changeing the color</p>
                          <p className="card-text">If you click Reset button values are reseting and Employee Name field getting focus and again input field color changes to black</p>
                        </div>
                    </div>

                    <div className="col-md-4 card bg-dark text-white ">
                      <div class="card-header m-2 "> <h3> useMemo Hook</h3> </div>
                        <div className="card-body">
                          <h5>Learning useMemo</h5>
                          <div className="card m-2">
                            <button className="btn btn-primary m-2"  onClick={()=>{setAdd(add+1)}}>Add</button> <span className="fs-5" >{add}</span>
                          </div>
                          <div className="card m-2">
                            <button className="btn btn-primary m-2" onClick={()=>{setSub(sub-1)}}>Sub</button> <span  className="fs-5">{sub}</span>
                          </div>
                          {/* <p className="card-text">If you click Reset button values are reseting and Employee Name field getting focus and again input field color changes to black</p> */}
                        </div>
                    </div>

                    <div className="col-md-4 card bg-dark text-white ">
                      <div class="card-header m-2 "> <h3> useMemo Hook : {useMemoHook}</h3> </div>
                        <div className="card-body">
                        <p className="card-text">Here if we are using useMemo hook whenever we click Add multiplication of Value*10 is performing and value is displaying on card header </p>
                          <p className="card-text">useMemo Hook returns memoized value This can improve the value</p>
                          <p className="card-text"> useMemo hook only runs when one of its dependencies update</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
                  
    )
}

export default UsForm;