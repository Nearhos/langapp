function TextBox(props) {
    return (

      
    <div className="col-sm" style={{border: '1px solid grey', borderRadius:'5px', backgroundColor: 'white', alignContent: 'center'}}>
    <div className="text" style={{color: props.textcolor, fontSize: props.fontsize}}>{props.text}</div>
  </div>
  
    );
  }
  
  export default TextBox;
  