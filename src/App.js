import Card from "./card";
import Navbar from "./Navbar";
import ExpenseItem from "./components/ExpenseItem";

function App(){
    let expenses = [
        {
            id : "e1",
            title: "Rakhi",
            date : new Date(2022,8,12),
            amount : 200
        },
        {
            id : "e2",
            title: "chocolate ",
            date : new Date(2022,8,12),
            amount : 400
        },
        {
            id : "e3",
            title: "watch",
            date : new Date(2022,8,12),
            amount : 1800
        },
    ]
   

    return (
        <div>
            <Navbar/>
            <Card/>
            <ExpenseItem
            date= {expenses[0].date}
            title = {expenses[0].title}
            amount = {expenses[0].amount}
            ></ExpenseItem>
            <ExpenseItem
            date= {expenses[1].date}
            title = {expenses[1].title}
            amount = {expenses[1].amount}
            ></ExpenseItem>
            <ExpenseItem
            date= {expenses[2].date}
            title = {expenses[2].title}
            amount = {expenses[2].amount}
            ></ExpenseItem>
                
        </div>
    )


}
export default App; 
