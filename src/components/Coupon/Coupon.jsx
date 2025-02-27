import React, { useState } from "react";
import { TbRuler2 } from "react-icons/tb";

const Coupon = () => {
  const [value, setValue] = useState("");
  const [Coupon, setCoupon] = useState(0);
  const [check, setCheck] = useState("");
  const handelCoupon = () => {
    if (value.length >= 4 && value.length < 10) {
      let CouponCode = Math.floor(Math.random() * 20);
      setCoupon(CouponCode);
      setCheck(true);
      handleError();
    }
  };
  const handleError = () => {
    if (value.length < 4 || value.length > 10) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  const handelDiscount = () => {
    let discount = 100 - (100 * Coupon) / 100;
    return discount;
  };
  const getDiscountPercentage = () => {
    return Coupon > 0 ? `${Coupon}%` : "0%";
  };
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>$100.00</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Shipping:</span>
        <span>$5.00</span>
      </div>

      <div className="flex items-center border rounded-lg overflow-hidden mb-3">
        <input
          type="text"
          className="w-full px-3 py-2 outline-none"
          value={value.toUpperCase()}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handelCoupon}
          className="bg-gray-200 px-4 py-2 border-l"
        >
          Apply
        </button>
      </div>
      <div>
        {!check && (
          <p className="text-red-400 text-sm mb-1">
            Your coupon code is invalid
          </p>
        )}

        {check && (
          <div>
            <p className="text-green-600 text-sm mb-1">
              Coupon applied: {Coupon || "$0.00"} ({getDiscountPercentage()})
              off your order
            </p>
            <div className="flex justify-between text-green-600 mb-4">
              <span>Discount:</span>
              <span>- {Coupon || "$0.00"}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span>${handelDiscount()}</span>
            </div>
          </div>
        )}
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Coupon;
