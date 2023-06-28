import React,{useState} from 'react'



export default function TextForm(props) {
    const upperCase=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert('Converted To Uppercase','success');
    }
    const sentence=()=>{
      let newText=text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
      setText(newText);
      props.showAlert('Converted To Uppercase','success');
   }
   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
    const lowerCase=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('Converted To Lowercase','success');
    }
    const copy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert('Copied To Clipboard','success');
    }
    const clear=()=>{
      setText("");
      props.showAlert('Text Cleared!','success');
    }
    const handelOnChange=(event)=>{
       setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    <div className=" mb-3" >
      <textarea className="form-control" value={text} onChange={handelOnChange} 
      style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}
      id="myBox" rows="8" placeholder='Enter Text Here!'></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={upperCase}>To Uppercase</button>
    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={lowerCase}>To Lowercase</button>
    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={copy}>Copy Text</button>
    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={clear}>Clear Text</button>
    <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={sentence}>To Propercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p><b>{(text.split(/\s/).filter((element)=>{return element.length!==0}).length)}</b> words and <b>{text.length}</b> characters</p>
      <p>Time required to read your text =<b>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)}</b> minutes</p>
      <h2>Text Preview</h2>
      <p>{text.length>0?text:'Your text will be previewed here'}</p>
    </div>
    </>
   )
}
