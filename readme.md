# Currency Converter Project

## Overview

The Currency Converter project is a web application that allows users to easily convert currencies using real-time exchange rates. The project is implemented using HTML and JavaScript and provides a user-friendly interface for quick and convenient currency conversions.

## Features

- **Real-Time Exchange Rates:** Utilizes the ExchangeRate-API to fetch the latest exchange rates.
- **User-Friendly Interface:** Simple and intuitive design for ease of use.
- **Dynamic Flag Images:** Displays flag images based on the selected currencies using the Flags API.

## Project Components

### 1. JavaScript Code

The JavaScript code (`script.js`) consists of the following key components:

- **Currency Code Mapping:** Defines an object (`countryList`) mapping currency codes to country codes.
- **API Base URL:** Specifies the base URL (`BASE_URL`) for fetching exchange rates.
- **HTML Elements Reference:** References various HTML elements for interaction.
- **Functions:**
  - `renderOptions()`: Renders currency options for dropdowns.
  - Event listeners for dropdown changes.
  - Input validation functions (`resetInput()` and `validateInput()`).
  - `convertCurrency()`: Fetches and displays the converted amount based on user input.
  - Event listener for the conversion button.

### 2. HTML Code

The HTML code (`index.html`) structures the project and includes:

- **Document Structure:** Basic HTML structure with title, linked stylesheets, and JavaScript script.
- **Main Container and Styling:** Creates a main container (`main-container`) with styling for the background and content centering.
- **Currency Converter Container:** A container (`container`) for the currency converter with styling, including rounded corners and shadows.
- **Heading and Form:** Includes a heading (`h2`) for the currency converter and a form with input and dropdowns for currency selection.
- **Flag Images and Select Dropdowns:** Displays flag images (`from-img` and `to-img`) and select dropdowns (`from-select` and `to-select`) for currency selection.
- **Result Message and Button:** A div (`msg`) for displaying the conversion result message and a button (`btn`) for triggering the currency conversion.

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/currency-converter.git

- Open index.html:
- Open the index.html file in your preferred web browser.

## Select Currencies:

    -Choose the currency you want to convert from in the "From" dropdown.
    Select the target currency in the "To" dropdown.

- Enter Amount:
- Enter the amount you want to convert in the input field.

- Click Convert:
- Click the "Get Exchange Rate" button to see the converted amount

## Dependencies
 
    ExchangeRate-API: Provides real-time exchange rates.
    Flags API: Dynamically fetches flag images based on selected currencies.

## Additional Information

    Ensure an internet connection to fetch the latest exchange rates.
    Contributions are welcome for improvements, such as adding more currencies or enhancing the UI.