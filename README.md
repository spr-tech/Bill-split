# Bill Split App

This is a small React project I built to practice working with state, props, forms, and local storage.

The app helps you keep track of shared expenses with friends. You can add a friend, choose who you want to split a bill with, and the app updates the balance to show who owes who.

## Why I built it

I made this project to get better at React by building something practical instead of only following theory. I wanted to practice how data moves between components and how user actions can update the UI.

## What the app can do

- Add a new friend
- Save a friend’s name and image
- Select a friend from the list
- Split a bill with that friend
- Update the balance depending on who paid
- Remove a friend
- Keep the data in local storage even after refreshing the page

## How the balance works

The balance tells you the current situation between you and your friend:

- A **negative balance** means **you owe your friend**
- A **positive balance** means **your friend owes you**
- A balance of **0** means everything is settled

## What I used

- React
- JavaScript
- CSS
- `useState`
- `localStorage`
- `nanoid`

## What I learned from this project

While building this app, I practiced:

- working with React state
- passing props between components
- handling form inputs
- updating arrays in state
- conditional rendering
- storing and reading data from local storage
- breaking the UI into smaller reusable components

## Components in the app

The project is split into different components to keep things organized:

- `FriendList` – shows the list of friends
- `AddFriend` – handles adding a new friend
- `Button` – reusable button component
- `AddSplitBill` – handles the bill splitting form
