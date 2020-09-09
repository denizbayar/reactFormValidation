import React, { Component } from 'react'

import './UserForm.css'

const initialState ={emailError:'', phoneError:'',usernameError:'',username:'', phone:'', email:''};
 class UserForm extends Component {
     constructor(props){
        super(props);
         this.state = initialState;
        }
     
    validate(){
        if(this.state.username.length<1){
            this.setState({usernameError:'Please enter valid username!'});
            return false;
        }
        if(!this.state.email.includes('@')){
            this.setState({emailError:'Please enter valid email!'});
            return false;
        }
        if(this.state.phone.length<5 || this.state.phone.length>15){
            this.setState({phoneError:'Phone number can not be less than 5 digits or more than 15 digits'});
            return false;
        }
        return true;
    }

    clearErrors(){
        let initErrors={emailError:'', phoneError:'',usernameError:''};
        this.setState(initErrors);
    }

     onChangeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
     }

     submitHandle =e=>{
         e.preventDefault();
         this.clearErrors();
         let isValid =this.validate();
         if(isValid){
             console.log(this.state);
             this.setState(initialState);
         }
     }
    render() {
        return (
            <div className="form_container">
               <form onSubmit={this.submitHandle}>
                   <h3>User Info</h3>
                    <label htmlFor="username">Username:</label>
                    <input 
                    name="username" 
                    id="username" 
                    type="text" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.onChangeHandler}
                    />   
                    {this.state.usernameError ? <span>{this.state.usernameError}</span> : null}
                    <br/>

                    <label htmlFor="email">Email Address:</label>
                    <input 
                    name="email" 
                    id="email" 
                    type="text" 
                    placeholder="Email Address" 
                    value={this.state.email} 
                    onChange={this.onChangeHandler}
                    />
                    {this.state.emailError ? <span>{this.state.emailError}</span> : null}
                    <br/>

                    <label htmlFor="phone">Phone Number:</label>
                    <input 
                    name="phone" 
                    id="phone" 
                    type="text" 
                    placeholder="Phone Number" 
                    value={this.state.phone} 
                    onChange={this.onChangeHandler}
                    />   
                    {this.state.phoneError ? <span>{this.state.phoneError}</span> : null}
                    <br/>

                    <button type="submit">Save User</button>   
                </form> 
            </div>
        )
    }
}

export default UserForm;