# JS-Todo-List

A simple and lightweight Todo List application built with Vanilla JavaScript. This project uses Materialize CSS for styling.

## Features
- Add tasks with a user-friendly input field.
- Mark tasks as complete or pending.
- Edit tasks in place.
- Delete tasks with a fade-out animation.
- Filter tasks (All, Completed, Pending).
- Tasks persist in the browser using Local Storage.

## Getting Started
This project does not use a package manager or `package.json`. It is a standalone HTML, CSS, and JavaScript project.

### Running the Application
1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your browser.
   - Alternatively, use [Visual Studio Code](https://code.visualstudio.com/) with the Live Server extension for a local development server.

### Prerequisites
- A modern web browser like Chrome, Firefox, or Edge.
- (Optional) [Visual Studio Code](https://code.visualstudio.com/) with the Live Server extension.

## How It Works
### Adding a Task
1. Type a task into the input field.
2. Click the "Add" button.
3. The task is displayed in the task list and saved to Local Storage.

### Editing a Task
1. Click the "✎" button next to a task.
2. The task text becomes editable.
3. After making changes, click outside the input field to save.

### Marking a Task as Complete
1. Click the "✓" button next to a task.
2. The task text is styled as completed.

### Deleting a Task
1. Click the "✕" button next to a task.
2. The task fades out and is removed from the list and Local Storage.

### Filtering Tasks
1. Use the "All", "Completed", or "Pending" buttons to filter tasks.
2. The list updates to show tasks matching the selected filter.

## Technologies Used
- **JavaScript**: Core functionality.
- **Materialize CSS**: Provides modern and responsive UI components.
- **Local Storage**: Persists tasks across browser sessions.