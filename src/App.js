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
import Extra from "./components/Extraes/Extra";
import Cars from "./components/CarSorting/Cars";
import RandomCar from "./components/Random/RandomCar";
import Contact from "./components/Contact/Contact";
import Sidebars from "./components/Sidebars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Optione from "./components/Optione/Optione";
import Coupon from "./components/Coupon/Coupon";
function App() {
  return (
    <div className="flex">
      {/* */}

      <Sidebars />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/options" element={<Optione />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/check" element={<Check />} />
        <Route path="/form" element={<Form />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/random-car" element={<RandomCar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/traffic" element={<Traffic />} />
        <Route path="/search" element={<Search />} />
        <Route path="/valid-form" element={<ValidForm />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </div>
  );
}

export default App;
