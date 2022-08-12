import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
export default function ExpenseItem(props) {


    return (
        <div className="expense_item">
            <div className="two-div">
           <ExpenseDate date= {props.date}/>
            <div className="expense_Description"> 
            <h3>{props.title}</h3>
            </div>
            </div>
            <div className="expense_price">${props.amount}</div>
        </div>
    )
}