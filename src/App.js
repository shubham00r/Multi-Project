import logo from "./logo.svg";
import "./App.css";
import Star from "./components/star/Star";
import Check from "./components/Checked/Check";
import Form from "./components/multi_form/Form";

function App() {
  return (
    <div className="">
      {/* <Star /> */}
      {/* <Check /> */}
      <div className="h-screen bg-pink-200">
        <Form />
      </div>
    </div>
  );
}

export default App;
