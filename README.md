# Typing Speed Test Game

A **Typing Speed Test Game** built with HTML, CSS, and JavaScript. This game challenges players to test their typing speed by providing a random word that needs to be typed within a specified time limit based on the selected difficulty level.

## Features

- **Choose Difficulty**: Select between `EASY`, `NORMAL`, or `HARD` levels.
- **Dynamic Words**: Random words are displayed for the user to type.
- **Timer**: Each level has a unique countdown timer.
- **Score Tracker**: Tracks the user's score as they correctly type words.
- **Responsive UI**: Simple and user-friendly design.

---

## How It Works

1. **Start Game**:
   - Choose a difficulty level from `EASY`, `NORMAL`, or `HARD`.
   - A random word will appear for the user to type.

2. **Typing**:
   - The user must type the displayed word into the input field before the timer reaches zero.
   - Correct typing increases the score and displays the next word.
   - Incorrect typing or timeout ends the game.

3. **Dynamic Word List**:
   - Words are dynamically fetched and displayed, and previously used words are removed from the list.

4. **Game Flow**:
   - The game loops until all words are completed or the user fails to type a word in the allocated time.

---

## Code Structure

### **HTML**
The structure of the game includes:
- A welcome screen with difficulty selection.
- A game container with elements like:
  - Random word display.
  - Countdown timer.
  - Input field.
  - Score tracker.

### **CSS**
Handles the styling of:
- Buttons and game layout.
- Transition effects like hiding the start menu and displaying the game container.

### **JavaScript**
Implements:
- Difficulty selection.
- Timer functionality using intervals.
- Random word generation and display.
- Event listeners for user input validation and score tracking.
- Preventing copy actions.

---

## How to Run the Project

1. Clone the repository or download the project files.
2. Open the `index.html` file in your web browser.
3. Select a difficulty level and start typing!

---


