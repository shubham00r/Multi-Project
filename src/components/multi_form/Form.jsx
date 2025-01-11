import React, { useState } from "react";

import Form2 from "./Form2";
import Form3 from "./Form3";
import FinalPage from "./FinalPage";
import Congratulations from "./Congratulations";

const Form = () => {
  const [count, SetCount] = useState(0);
  const [check, SetCheck] = useState(false);
  const [formData, SetFormData] = useState({
    email: "",
    name: "",
    phone: "",
    repo: "",
    button: "",
    userChecked: "",
  });
  console.log(check);
  const handleChanges = (e) => {
    const { name, value } = e.target;
    SetFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetCount(count + 1);
    console.log("Final Form Data:", formData);
  };

  const handleBack = () => {
    SetCount(count - 1);
    SetCheck(false);
  };
  const handleNext = () => {
    if (count != 2) {
      SetCount(count + 1);
    }
    if (check == true) {
      SetCount(count + 1);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded h-[600px] bg-slate-50 w-[500px] px-4">
        <div className="flex flex-wrap justify-center gap-20 py-4">
          {["1", "2", "3", "4"].map((item, i) => {
            return (
              <div
                key={item}
                className={
                  count >= i
                    ? "flex flex-col items-center justify-center rounded-full w-7 h-7 bg-orange-600"
                    : " flex flex-col items-center justify-center rounded-full w-7 h-7 bg-slate-400"
                }
              >
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <hr className="" />

        <div>
          <h1 className="pt-8 text-2xl font-medium">
            {count == 0
              ? "Personal information"
              : count == 1
              ? "Skill Level"
              : count == 2
              ? "Challenge Preference"
              : count == 3
              ? "Review and Confirm"
              : ""}
          </h1>
          <p className="pt-2">
            {count < 4 &&
              "Please provide your Personal detail so we can get to know your better"}
          </p>
          <form onSubmit={handleSubmit}>
            {count == 0 && (
              <div className="flex flex-wrap items-center justify-between gap-5 pt-3">
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Full Name
                  </label>
                  <br />
                  <input
                    className="w-full h-8 pl-2 mt-1 border border-orange-500 rounded outline-none"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChanges}
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Email Address
                  </label>
                  <br />
                  <input
                    className="w-full h-8 pl-2 mt-1 border border-orange-500 rounded outline-none"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChanges}
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Phone Number
                  </label>
                  <br />
                  <input
                    className="w-full h-8 pl-2 mt-1 border border-orange-500 rounded outline-none"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChanges}
                  />
                </div>

                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Git repo
                  </label>
                  <br />
                  <input
                    className="w-full h-8 pl-2 mt-1 border border-orange-500 rounded outline-none"
                    type="text"
                    name="repo"
                    value={formData.repo}
                    onChange={handleChanges}
                  />
                </div>
              </div>
            )}

            {/* {count == 1 && <Form1 />} */}
            {count == 1 && (
              <Form2
                formData={formData}
                SetFormData={SetFormData}
                handleChanges={handleChanges}
              />
            )}
            {count == 2 && (
              <Form3
                formData={formData}
                SetFormData={SetFormData}
                SetCheck={SetCheck}
              />
            )}
            {count == 3 && (
              <FinalPage formData={formData} SetFormData={SetFormData} />
            )}
            {count == 4 && <Congratulations />}
          </form>
        </div>
        <div
          className={` ${
            count == 0
              ? "flex justify-end items-center"
              : "flex items-center justify-between"
          }`}
        >
          {count != 0 && count != 3 && count != 4 && (
            <div className="py-2 mt-24 text-center bg-orange-500 rounded-lg w-28">
              <button onClick={handleBack} className="text-lg font-medium ">
                Go Back
              </button>
            </div>
          )}
          {count < 4 && (
            <div>
              {count == 3 ? (
                <div
                  className={`py-2 mt-24 text-center bg-orange-500 rounded-lg  w-28`}
                >
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-lg font-medium "
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div
                  className={`py-2 mt-24 text-center bg-orange-500 rounded-lg w-28`}
                >
                  <button onClick={handleNext} className="text-lg font-medium ">
                    Next Step
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
