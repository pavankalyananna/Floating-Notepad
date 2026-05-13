const NOTE_ID = "floating-note";

function createNote() {

    if (document.getElementById(NOTE_ID)) return;

    const note = document.createElement("div");
    note.id = NOTE_ID;

    note.innerHTML = `
        <div id="note-header">
            <span>Quick Note</span>
            <button id="close-note">×</button>
        </div>

        <textarea id="note-textarea"
            placeholder="Type here..."></textarea>
    `;

    document.body.appendChild(note);

    enableDragging(note);

    // Close button
    document.getElementById("close-note")
        .addEventListener("click", () => {
            removeNote();
        });
}

function removeNote() {

    const existing = document.getElementById(NOTE_ID);

    if (existing) {
        existing.remove();
    }
}

function toggleNote() {

    const existing = document.getElementById(NOTE_ID);

    if (existing) {
        removeNote();
    } else {
        createNote();
    }
}

function enableDragging(note) {

    const header = document.getElementById("note-header");

    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener("mousedown", (e) => {

        isDragging = true;

        offsetX = e.clientX - note.offsetLeft;
        offsetY = e.clientY - note.offsetTop;

        document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

        note.style.left = `${e.clientX - offsetX}px`;
        note.style.top = `${e.clientY - offsetY}px`;

        note.style.right = "auto";
    });

    document.addEventListener("mouseup", () => {

        isDragging = false;

        document.body.style.userSelect = "auto";
    });
}

// Listen for extension icon click
chrome.runtime.onMessage.addListener((message) => {

    if (message.action === "toggle-note") {
        toggleNote();
    }
});
