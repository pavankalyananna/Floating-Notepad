# Floating Sticky Notepad Chrome Extension

A lightweight floating sticky notepad for Google Chrome that helps users quickly copy, paste, and manage temporary text without constantly switching tabs.

The notepad appears only when the extension icon is clicked and can be dragged, resized, minimized, or closed anytime.

---

## Features

- Floating sticky notepad overlay
- Opens only when clicking the extension icon
- Draggable interface
- Resizable window
- Lightweight and fast
- Clean minimal UI
- Temporary text only
- No login or account required
- No backend or cloud storage
- Close button support
- Works on most websites

---

## Extension Behavior

| Action | Result |
|---|---|
| Open webpage | Notepad remains hidden |
| Refresh webpage | Notepad remains hidden |
| Click extension icon | Toggle notepad open/close |
| Click close button | Hide notepad |
| Drag header | Move notepad |


---

## Project Structure

```text
floating-notepad/
│
├── manifest.json
├── background.js
├── content.js
├── style.css
├── README.md
│
└── icons/
    ├── 16.png
    ├── 48.png
    └── 128.png
