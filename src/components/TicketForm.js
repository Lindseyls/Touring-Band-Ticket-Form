import { useState, useEffect } from "react";

import TicketType from "./TicketType";
import TotalAmount from "./TotalAmount";
import PaymentForm from "./PaymentForm";

/**
 * Functional component that allows the user to select their ticket options and
 * enter their personal and payment information.
 * Displayed as the right column on the page.
 */
function TicketForm({ ticketTypes }) {
  // Track the quantity of tickets selected (array of nums).
  const [quantities, setQuantities] = useState(
    ticketTypes.map(() => 0) // initialize all to 0
  );

  // Reset quantities when ticketTypes change (e.g., band change).
  useEffect(() => {
    setQuantities(ticketTypes.map(() => 0));
  }, [ticketTypes]);

  // Updates the quantity for a given ticket index.
  const handleQuantityChange = (index, value) => {
    const update = [...quantities];
    update[index] = value;
    setQuantities(update);
  };

  // Handles form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedTickets = ticketTypes.map((type, index) => ({
      name: type.name,
      quantity: quantities[index],
      cost: type.cost,
    }));

    // Calculates the total ticket cost that will be displayed in the alert.
    const total = selectedTickets.reduce(
      (sum, t) => sum + t.quantity * t.cost,
      0
    );

    // This is an alert that will be displaying the data with purchased ticket information.
    // This simulates sending the data to a hypothetical backend server.
    alert(
      `Submitting order:\n${JSON.stringify(
        selectedTickets,
        null,
        2
      )}\nTotal: $${(total / 100).toFixed(0)}`
    );
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2 className="ticket-form-title">Select Tickets</h2>

      {ticketTypes.map((ticket, index) => (
        <TicketType
          key={ticket.name}
          ticket={ticket}
          quantity={quantities[index]}
          onQuantityChange={(val) => handleQuantityChange(index, val)}
        />
      ))}

      <TotalAmount ticketTypes={ticketTypes} quantities={quantities} />
      <PaymentForm />

      <button type="submit" className="purchase-button">
        Get Tickets
      </button>
    </form>
  );
}

export default TicketForm;
