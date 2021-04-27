import React, {Component} from 'react';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            job:''
        }
    }
// onChangeHandle method

 onChangeHandle = (e) => {
     const {name,value} = e.target;
    this.setState({
        [name]:value
    })
 }
 //onSubmit handle
 onSubmitHandle = () => {
     this.props.handleSubmit(this.state)

 }


    render(){
    const {name, job} = this.state;
    
         return (
             <div>
                 <form onSubmit={this.onSubmitHandle} >
                    <label htmlFor="name"> Name : </label>
                        <input type="text" name="name" value={name} onChange={onChangeHandle} />
                    <labe htmlFor="job"> Job </labe>
                        <input type="text" name="job" value={job} onChange={this.onChangeHandle} />
                 </form>
             </div>

            
         )
}





}

export default Form;