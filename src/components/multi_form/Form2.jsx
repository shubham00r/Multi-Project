import React, { useState } from "react";

const Form2 = ({ formData, SetFormData }) => {
  const [count, SetCount] = useState(0);
  const handelButton = (value, i) => {
    SetCount(i);
    console.log(value, count);

    SetFormData((prev) => ({ ...prev, button: value }));
  };

  return (
    <div>
      <div className="pt-5 text-center">
        <div className="grid grid-cols-2 gap-5 pt-3">
          {["Beginner", "intermediate", "Advanced", "Expert"].map((item, i) => {
            return (
              <div key={item} value={formData.button}>
                <button
                  value={item}
                  name="button"
                  className={`w-56 py-4 text-lg font-medium ease-in-out hover:border hover:border-orange-600 ${
                    count === i ? "border-orange-600 border" : "border-none"
                  }`}
                  onClick={() => handelButton(item, i)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form2;
