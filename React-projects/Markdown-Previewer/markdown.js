var Input=React.createClass({
  input: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Ramya Malluru](https://www.freecodecamp.com/ramyakatakam)*',
  getInitialState:function(){
    return {input:this.input};
  },
  //textarea onchange
  changeInput:function(e)
  {
   this.setState({input:e.target.value});
  },
  //to convert textarea value
   mark:function(){
     var markup=marked(this.state.input);
     return {__html:markup}},
  //render method returns what to display
  render:function(){
  return (<div class="row">
      <div className="small-5 small-offset-1 columns">
      
        <textarea  className="textdec" rows="25" onChange={this.changeInput} >{this.state.input}</textarea></div>
      <div className="small-5 small-offset-1 columns">
        <div className="markedval" dangerouslySetInnerHTML={this.mark()}></div></div>
  
      
      </div>);
}
  
  
  
});
React.render(<Input  />,document.getElementById("app"));