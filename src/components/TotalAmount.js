/**
 * Functional component that displays the total ticket cost in the UI.
 */
function TotalAmount({ ticketTypes, quantities }) {
  const total = ticketTypes.reduce((sum, ticket, index) => {
    return sum + ticket.cost * (quantities[index] || 0);
  }, 0);

  return (
    <div className="total-amount">
      <h3>TOTAL</h3>
      <p>${(total / 100).toFixed(0)}</p>
    </div>
  );
}

export default TotalAmount;
