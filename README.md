# IT313 Laboratory 4: React Components & JSX in Action

Author: Daperoc, Althena  
Course: IT313 - Mobile Programming  

## Problem Description
Build a student roster card renderer in React Native (Expo) that reads student data, passes values into a reusable `StudentCard` component via destructured props, conditionally displays a "Full Load" badge, computes the total student count dynamically, and renders the list using `.map()` with unique keys.

## Component Structure
- **`StudentCard`**: Functional component accepting `name`, `course`, `units`, and `isFullLoad` as destructured props. Handles rendering individual card layouts and conditional logic (`isFullLoad && ...`).
- **`StudentRoster`**: Parent component that holds the `students` array, displays the computed roster length header, and maps over student objects using stable `student.id` keys.

## How to Run
1. Install dependencies:
   ```bash
   npm install