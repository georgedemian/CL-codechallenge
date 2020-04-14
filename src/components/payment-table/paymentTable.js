import React from 'react';

const PaymentTable = (props) =>{
    let paymentMap = props.payments;
    return(
        <div className="payment-table">
            {paymentMap ? paymentMap.map( (payment, key) => {
                
                return(
                    <div key={key} className="row" >
                        <span className="name">{payment.name}</span>
                        <span className="name"> - {payment.amount}</span>

                        <button onClick={() => {
                            alert([payment.name, payment.description])
                            }}>View</button>
                        <button onClick={() => {props.editPayment(payment, payment.id)}}>Edit</button>
                        <button onClick={() => {props.deletePayment(payment.id)}}>Remove</button>
                    </div>
                )
              }): <span> There is no records registered</span>
            }
        </div>
    )
}



export default PaymentTable;