import logo from "./logo.svg";
import "./App.css";
import Star from "./components/star/Star";
import Check from "./components/Checked/Check";
import Form from "./components/multi_form/Form";
import Search from "./components/Filter_Search/Search";
import ExpenseTracker from "./components/Expensive/ExpensiveTracker";
import Memo from "./components/Memo/Memo";
import Traffic from "./Traffic/Traffic";

import ValidForm from "./components/SubmitForm/ValidForm";
function App() {
  return (
    <div className="">
      {/* <Star /> */}
      {/* <Check /> */}
      {/* <div className="h-screen bg-pink-200">
        <Form />
      </div> */}
      {/* <ExpenseTracker /> */}
      {/* <Memo /> */}
      {/* <Traffic /> */}
      {/* <Search /> */}
      <ValidForm />
    </div>
  );
}

export default App;
