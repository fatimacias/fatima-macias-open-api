# fatima-macias-open-api

## Description

Marvel Explorer is a web application that allows users to browse and search Marvel characters and comics using the official Marvel public API. The app provides an accessible interface with tabs to toggle between characters and comics, dynamic search, result limits, and detailed information displayed in a modal.

## Features

- 🌐 Uses the official Marvel public API to fetch characters and comics data
- 🔍 Search functionality by name (for characters or comics)
- #️⃣ Input field to choose how many results to fetch (default: 20)
- 🧭 Tabbed interface to toggle between characters and comics
- 🪄 Responsive layout for desktop, tablet, and mobile devices

### 🧩 Modal Functionality

- Clicking on a **character card** opens a modal with:
  - Character name and description
  - Up to 5 related comics
  - Up to 5 related series
  - Up to 5 related events
  - Up to 5 related stories

- Clicking on a **comic card** opens a modal with:
  - Comic title and description
  - Up to 5 related characters
  - Up to 5 related events
  - Price list (physical/digital)

- The modal is dynamic:
  - It only shows content relevant to the current tab
  - Accessible (uses ARIA roles and keyboard closable)
  - Styled with responsive and elegant design

### Accessibility & UX Enhancements

- Keyboard-accessible search (press Enter to trigger search)
- Interactive card hover effects
- Closes modal by clicking outside or on close button
- Loading feedback when fetching data

## Technologies Used

- HTML5
- CSS3 (Responsive, custom styles, modal)
- JavaScript (Vanilla JS)
- Marvel Public API

## How to Use

1. Clone or download the repository
2. Open `index.html` in your web browser (no server setup required)
3. Use the tabs to switch between Characters and Comics
4. Type a search term and set the number of results to fetch
5. Click on any character card to view extended details

## Credits

- [Marvel API](https://developer.marvel.com/) – Data source

> This project was built as part of an open API assignment.