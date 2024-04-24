document.addEventListener("DOMContentLoaded", () => {
    showNotes(); // Show notes when the page loads
});

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const saveBtn = document.querySelector(".save-btn");

// Function to show notes from local storage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    addDeleteButtons(); // Add delete buttons for saved notes
}

// Function to update local storage with notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to add delete buttons to saved notes
function addDeleteButtons() {
    const savedNotes = document.querySelectorAll(".note-container");
    savedNotes.forEach(note => {
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";

        // Event listener for deleting note
        deleteBtn.addEventListener("click", () => {
            note.remove();
            updateStorage();
        });

        note.appendChild(deleteBtn);
    });
}

// Event listener for creating new note
createBtn.addEventListener("click", () => {
    createNewNote();
});

// Function to create a new note
function createNewNote() {
    let noteContainer = document.createElement("div");
    noteContainer.className = "note-container";

    let inputBox = document.createElement("textarea");
    inputBox.className = "input-box";
    inputBox.setAttribute("placeholder", "Type your note here...");
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    // Event listener for deleting note
    deleteBtn.addEventListener("click", () => {
        noteContainer.remove();
        updateStorage();
    });

    // Append inputBox and deleteBtn to the note container
    noteContainer.appendChild(inputBox);
    noteContainer.appendChild(deleteBtn);
    
    // Append note container to the notes container
    notesContainer.appendChild(noteContainer);
}

// Event listener for saving notes
saveBtn.addEventListener("click", () => {
    updateStorage();
    alert("Notes saved successfully!");
});
