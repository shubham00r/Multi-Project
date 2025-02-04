import React, { useState } from "react";

const ValidForm = () => {
  const [formData, SetFormData] = useState({
    FirstName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [error, SetError] = useState("");

  const handle = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    SetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    if (formData.Password.length < 8) {
      SetError("Password must be 8 characters long");

      return;
    }

    if (!/[!@#$%^&*()<>,."]/.test(formData.Password)) {
      SetError("Password must contain any special character");

      return;
    }

    if (formData.Password !== formData.ConfirmPassword) {
      SetError("Password and Confirm Password must same");

      return;
    }
    SetFormData({
      FirstName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    });
    SetError("");
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="p-6 bg-black rounded-lg w-96">
            <div className="w-full max-w-sm p-6 bg-black rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-[#fff] text-center">
                Create an Account
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  type="text"
                  placeholder="Enter Name here"
                  value={formData.FirstName}
                  name="FirstName"
                  onChange={handle}
                />
                <input
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  type="email"
                  name="Email"
                  placeholder="Enter Your Email"
                  value={formData.Email}
                  onChange={handle}
                />
                <input
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  type="password"
                  name="Password"
                  placeholder="Enter Password"
                  value={formData.Password}
                  onChange={handle}
                />
                <input
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  type="password"
                  name="ConfirmPassword"
                  placeholder="Confirm Password"
                  value={formData.ConfirmPassword}
                  onChange={handle}
                />
                {error && (
                  <p className="text-sm font-medium text-center text-red-500">
                    {error}
                  </p>
                )}

                <button className="w-full px-4 py-2 mt-3 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Submit
                </button>
              </form>

              <p className="text-xs text-[#fff] mt-4 text-center">
                By registering, you agree to our{" "}
                <span className="text-indigo-600">Terms & Conditions</span> and{" "}
                <span className="text-indigo-600">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidForm;
