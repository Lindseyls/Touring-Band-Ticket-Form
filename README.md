# Touring Band Ticket Purchase Form -- ActBlue Take Home Project

This is a React-based web form for purchasing concert tickets for various bands. The application allows users to select a band, view their concert information, choose ticket quantities, enter payment details, and simulate a ticket purchase.

--

## How to Run Locally

1. Clone the repository: `git clone https://github.com/Lindseyls/Touring-Band-Ticket-Form.git`
2. Install deps: `npm install`
3. Start app: `npm start`

The app will open at `http://localhost:3000`.

## Notes

- Data is loaded from JSON in `src/band-json/`
- No backend — there will be an alert that gets triggered when the uesr clicks, "Get Tickets"

## File structure

### Before:

```text
src/
|-- band-json/
| |-- kpop-band.json
| |-- punk-band.json
| |-- ska-band.json
|-- App.js
|-- BandForm.js
|-- index.css
|-- index.js
```

### After/Current:

```text
src/
|-- band-json/
| |-- kpop-band.json
| |-- punk-band.json
| |-- ska-band.json
|-- components/
| |-- BandInfo.js # Left column: band image and description
| |-- BandTicketForm.js # Top-level layout: header + two columns (left and right)
| |-- PaymentForm.js # Personal input: Name and address, payment input: card info
| |-- TicketForm.js # Right column: handles all form fields and tickets
| |-- TicketType.js # One ticket option (name, description, price, quantity input)
| |-- TotalAmount.js # Calculates the ticket total
|-- App.js # Entry point. Loads one band and passes it to BandTicketForm
|-- index.css
|-- index.js
```

## Features

- Select from multiple bands (loaded from JSON)
- View band image, description, date, and location
- Choose ticket types and quantities
- View a live-updating total ticket cost
- Enter personal and payment information
- Submit the form with a simulated backend alert

## Acceptance Criteria Checklist

This app satisfies all the required features outlined in the take-home project prompt:

- [x] Band name, description, location, date, and image
- [x] Ticket types with quantity selectors
- [x] Total amount calculated from selected tickets
- [x] Basic form inputs for name and card details
- [x] "Get Tickets" button triggers a submission alert (mock backend)

## Validation Note

Basic input validation (e.g., required fields) was considered but omitted in favor of completing the core requirements and styling polish, based on the project scope provided. I'm happy to discuss how I would approach validation or other enhancements in a follow-up.

If this were a production app, appropriate field validation and error handling would be implemented.

Thank you for reviewing this project!
