import React, { Component } from 'react';

class DrinkMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            type:'',
            price:'',
            money:''
        }
    }
    checkOrder = (money) =>{
        if(money >=this.state.price){
        alert("do uong cua ban day: "+this.state.type+'\nTong so: '+ (money)+'\nSo tien du: '+ (money-this.state.price)+"đ")
        }
        else{
            alert('khong du tien')
        }
    }
    submitForm = (event)=>{
        event.preventDefault();
        if(this.state.price == ' '){
            alert("vui long chon do uong");
        }
        else{
            if(this.state.money == ' '){
                alert("vui long nhap so tien cua ban")
            }
            else{
                this.checkOrder(this.state.money)
            }
        }
    }
    setHandel=(event)=>{
        let name=event.target.name;
        let value =event.target.value;
        if(name =='money'){
            if (!Number(value)){
                alert("nhap so vao ban oi")
            }
        }
        if(name=='type'){
            if(value=="Tra dao"){
                this.setState({price: 20000})
            }
            else if (value=='Tra tac'){
                this.setState({price: 10000})
            }
            else if (value=='Rong Do'){
                this.setState({price: 10000})
            }
            else if (value=='Nuoc cam'){
                this.setState({price: 10000})
            }
        }
        this.setState({[name]: value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Moi ban chon do uong:</td>
                                <td>
                                    <select name='type' onChange={this.setHandel}>
                                        <option selected hidden>Moi chon</option>
                                        <option value="Tra dao">Tra dao</option>
                                        <option value="Tra tac">Tra tac</option>
                                        <option value="Rong Do">Rong do</option>
                                        <option value="Nuoc cam">Nuoc cam</option>

                                    </select>
                                </td>
                                <td><table>Price---{this.state.price}</table></td>
                            </tr>
                            <tr>
                                <td>Moi ban nhap tien cua ban:</td>
                                <td>
                                    <input name='money' type='number' onChange={this.setHandel}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type='submit' value="Thanh toan"></input>
                    <h2></h2>
                </form>
            </div>
        );
    }
}

export default DrinkMenu;