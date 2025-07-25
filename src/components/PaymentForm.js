import { useState } from "react";

import { ImCreditCard } from "react-icons/im";

/**
 * Functional component that collects user personal and payment info.
 * Note: This does not actually process a payment.
 */
function PaymentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="payment-form">
      <div className="name-fields">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="payment-input-address"
      />

      <h4>Payment Details</h4>

      <div className="card-input-with-icon">
        <input
          type="text"
          name="cardNumber"
          placeholder="0000 0000 0000 0000"
          value={formData.cardNumber}
          onChange={handleChange}
        />

        <ImCreditCard className="card-icon" />
      </div>

      <div className="card-details">
        <input
          type="text"
          name="expiry"
          placeholder="MM / YY"
          value={formData.expiry}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default PaymentForm;
