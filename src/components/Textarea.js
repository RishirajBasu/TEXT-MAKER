import React, { useState } from 'react';
const Textarea = (props) => {

    const [text, setText] = useState("");
    const changeText=(e)=>{
        setText(e.target.value)
    }
    const handleUp=()=>{
       const newtext= text.toUpperCase();
       setText(newtext);
       props.showAlert("Your text has been changed to uppercase","success")
    }
    const handleDown=()=>{
        const newtext= text.toLowerCase();
        setText(newtext);
        props.showAlert("Your text has been changed to lowercase","success")
    }
    const handleClear=()=>{
      setText("");
      props.showAlert("Your text has been cleared","success")
    }
    const handleCapitalise=()=>{
      let arr=text.split(" ");
      console.log(arr);
      // arr.forEach((element)=>{
      //   element.toUpperCase();
      //   console.log(element);
      // })
      for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        console.log(arr)
      }
      let newtext= arr.join(" ");
      setText(newtext)
      props.showAlert("Your text has been capitalised","success")
    }
    const handleReverseText=()=>{
      let arr=text.split(" ");
      console.log(arr);
      let newarr=arr.reverse();
      console.log(newarr)
      let newtext= newarr.join(" ");
      setText(newtext)
      props.showAlert("Your text has been reversed","success")
    }
    // const [props.myStyle, setprops.myStyle] = useState({
    //   color:"white",
    //   backgroundColor:"black",
    //   padding:"25px"
    // });
    // const [Modetype, setModetype] = useState(`${props.mode==='light'?'dark':'light'} Mode`)
    // const Mode=()=>{
    //     if(Modetype==="light Mode"){
    //       let newstyle={
    //         color:"black",
    //         backgroundColor:"white",
    //         padding:"25px"
    //       }
    //       setprops.myStyle(newstyle)
    //       setModetype("dark Mode")
    //     }
    //     else{
    //       let newstyle={
    //         color:"white",
    //         backgroundColor:"black",
    //         padding:"25px"
    //       }
    //       setprops.myStyle(newstyle)
    //       setModetype("light Mode")
    //     }
    // }
    const handleCopyText=()=>{
       let newtext=document.getElementById('textarea');
       newtext.select();
       navigator.clipboard.writeText(newtext.value)
       props.showAlert("Your text has been copied","success")
    }
    const handleDelExtraSpaces=()=>{
        let arr=text.split(/\s+/)
        let newarr=arr.join(" ")
        setText(newarr)
        props.showAlert("Extra spaces has been deleted","success")
    }
    let count =1
    const handleAddExtraSpaces=()=>{
      count++;
      console.log(count)
      let arr=text.split(" ")
      let newarr;
      if(count===1){
       newarr=arr.join("  ")
      }
      else{
       newarr=arr.join("   ")
      }
        setText(newarr)
        props.showAlert("Extra spaces has been added","success")
    }
  
  return (
    <div className="container my-5" style={props.myStyle}>
          <div>
                <form>
                    <div className="form-group" >
                      <textarea placeholder='Enter your text here to enable all the features below!' className="form-control" style={props.mode==='dark'?{color:"white", backgroundColor:"black",padding:"50px", borderRadius:"20px"}:{color:"black", backgroundColor:"white", padding:"50px", borderRadius:"20px"}} value={text} id="textarea" onChange={changeText} rows="8"/>
                    </div>
                </form>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-warning my-2 mx-1" onClick={handleUp}>Uppercase</button>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-warning my-2 mx-3" onClick={handleDown}>Lowercase</button>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-success my-2" onClick={handleCapitalise}>Capitalise</button>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-success my-2 mx-3" onClick={handleReverseText}>Reverse-Sentence</button>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-primary my-2 " onClick={handleAddExtraSpaces}>Add Extra Space</button>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-primary my-2 mx-3" onClick={handleDelExtraSpaces}>Delete Extra Spaces</button>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-danger my-2" onClick={handleCopyText}>Copy-Text</button>
                <button disabled={text.length===0} style={text.length===0?{textDecoration:"line-through"}:{}}className="btn btn-outline-danger my-2 mx-3" onClick={handleClear}>Clear-Text</button>
          </div>
          <div className="container my-5" style={props.mode==='dark'?{color:"rgb(240 128 128)", backgroundColor:"black",padding:"70px", borderRadius:"20px"}:{color:"black", backgroundColor:"white", padding:"70px", borderRadius:"20px"}}>
          {/* <div className="btn btn-outline-danger my-5" onClick={Mode}>{Modetype}</div> */}
            <h1>Text Summary</h1>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characetrs.</p>
            <p>Average Time taken to read: {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} mins</p>
            <h2>Preview: </h2>
            <p  className="my-5" style={{border:`2px solid ${props.mode==='dark'?'white':'black'}`, width:"100%", height:"50vh", borderRadius:"50px",padding:"30px",overflow:"auto"}}>{text.length===0?"Enter your text to preview":text}</p>
          </div>
    </div>
  )
}

export default Textarea
