function TextBox(props) {
    return (

      <div className="outside" style={{paddingTop: props.pt}}>
    <div className="col-sm" style={{border: '5px solid grey', borderRadius:'5px', backgroundColor: 'white', alignContent: 'center'}}>
    <div className="text" style={{color: props.textcolor, fontSize: props.fontsize}}><p>
    test</p></div>
  </div>
  </div>
    );
  }
  
  export default TextBox;
  