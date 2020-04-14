import React, {useState} from 'react';
import PaymentTable from '../payment-table/paymentTable';
import UpdatePayment from '../update-payment/updatePayment';
import './home.scss';
let paymentData = [
     {
        id: 1,
        name: "Payment 1",
        amount: 12212,
        description: " this is a payment"
    },
    {
        id: 2,
        name: "Payment two",
        amount: 12212,
        description: "this is a payment"
    }
];

const Home = () =>{
    const [payments, setPayments ] = useState(paymentData)
    const [inputs, setInputs] = useState({});
    const [currentPayment, setCurrentPayment ] = useState({ id: null, name: '', amount: '', description: ' '})
    const [editMode, setEditMode] = useState(false);

    const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
          inputs.id = payments.length + 1
          setPayments([...payments, inputs])
          setInputs({ id: null,name: '', amount: '', description: '' });
        }
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        
    }  
    const deletePayment = id => {
		setPayments(payments.filter(payment => payment.id !== id))
    }
    const editPayment = (payment, paymentID) =>{
        setEditMode(true);
        setCurrentPayment({id: paymentID, name: payment.name, amount: payment.amount, description:payment.description})
    }
    const handleUpdate = (paymentUpdated) => {
            setEditMode(false)
            setPayments(payments.map(payment => (payment.id === paymentUpdated.id ? paymentUpdated : payment)))   
	}
    return(

    <div className="container">
        <h1>Payment Tracks</h1>
        { editMode ? (
            <UpdatePayment payment={currentPayment} updatePayment={handleUpdate}> </UpdatePayment>
        )
        : (<form onSubmit={handleSubmit}>
            <input name="name" placeholder="name" value={inputs.name} onChange={handleInputChange}></input>
            <input name="amount" placeholder="amount" value={inputs.amount} onChange={handleInputChange}></input>
            <input name="description" placeholder="description" value={inputs.description} onChange={handleInputChange}></input>
            <button type="submit">Add quick payment</button>
        </form>)}
        <br></br>
        <PaymentTable payments={payments} deletePayment={deletePayment} editPayment={editPayment}/>
    </div>
    )
}

export default Home;