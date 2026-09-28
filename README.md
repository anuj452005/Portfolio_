# AnujOS

A macOS-style desktop in the browser.
It is Anuj Tripathi's portfolio: about, projects, skills, experience, contact, and a small Terminal.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8765
```

Then visit [http://127.0.0.1:8765](http://127.0.0.1:8765).

## What is in here

| File | Role |
| --- | --- |
| `index.html` | Shell: boot screen, menu bar, dock, windows |
| `styles.css` | Layout and glass UI |
| `app.js` | Window manager, apps, and the `DATA` object |
| `anuj_resume.pdf` | Resume download from Experience |

Edit `DATA` at the top of `app.js` to change copy, links, and project cards.

## Shortcuts

- Spotlight: `⌘K` or `Ctrl+K`
- Minimize front window: `⌘M` or `Ctrl+M`
- Double-click a desktop icon to open it
- Drag a title bar to move a window
- Double-click a title bar to fill the screen

In Terminal, type `help`.

## Apps

About Me, Projects (FlowForge, Realtime Chat, Apex CLI), Skills, Experience, Contact, Terminal, and Trash.
Control Center in the menu bar switches wallpaper (Aurora, Dusk, Ocean) and brightness.
