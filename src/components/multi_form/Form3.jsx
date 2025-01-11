import React, { useEffect, useState } from "react";

const user = [
  {
    name: "HTML/CSS/JS",
  },
  {
    name: "React js",
  },
  {
    name: "AngularJs",
  },
  {
    name: "Vue.js",
  },
];
const Form3 = ({ SetFormData, SetCheck }) => {
  const [dataUser, SetDataUser] = useState([]);
  const [count, SetCount] = useState(0);

  useEffect(() => {
    SetDataUser(user);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    const tempUser = dataUser.map((user) =>
      user.name == name ? { ...user, isChecked: checked } : user
    );
    // SetDataUser(tempUser);
    SetFormData((prev) => ({ ...prev, userChecked: tempUser }));
    console.log(name);
    console.log(checked);
    SetCheck(checked);
  };

  return (
    <div>
      <div className="pt-5 text-center">
        <div className="grid grid-cols-2 gap-5 pt-3 cursor-pointer">
          {dataUser.map((item, i) => {
            return (
              <div key={i} className="">
                <div
                  onClick={() => SetCount(i)}
                  className={`w-full py-4 text-lg font-medium ease-in-out hover:border hover:border-orange-600 flex flex-row-reverse justify-end pl-5 gap-5  ${
                    count === i ? "border-orange-600 border" : "border-none"
                  }`}
                >
                  {item.name}
                  <div className="">
                    <input
                      type="checkbox"
                      name={item.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form3;
