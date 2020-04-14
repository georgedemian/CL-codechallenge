import React, { useState } from 'react';

const UpdatePayment = (props) =>{
    const [payment, setPayment] = useState(props.payment)

    const handleInputChange = (event) => {
        event.persist();
        setPayment({...payment, [event.target.name]: event.target.value});
        
    }  

    return (
        <form onSubmit={ event =>{
            event.preventDefault();
            props.updatePayment(payment)
        }   
            }>
                <input name="name" placeholder="name" defaultValue={payment.name } onChange={handleInputChange}></input>
                <input name="amount" placeholder="amount" defaultValue={payment.amount} onChange={handleInputChange}></input>
                <input name="description" placeholder="description" defaultValue={payment.description} onChange={handleInputChange}></input>
                <button type="submit">Update Payment</button>
        </form>
    )
}


export default UpdatePayment