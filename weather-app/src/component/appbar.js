import React from 'react';
class Appbar extends React.Component{
    render(){

        const input=this.props.value===""?"":<div><button onClick={e=>{this.props.on(e)}}>search</button></div>
        return(
               <div className="Appbar">
                   <i className="material-icons icon">menu</i>
                   <i className="material-icons icon s">search</i>
                <input type="text" value={this.props.value} onChange={e=>this.props.onChange(e)} placeholder="Search..." ></input>
                   {input}
               </div>
               )
    }
}
export default Appbar;
