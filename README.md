## 🌟 Overview

**Pro Stopwatch** is a lightweight, dependency-free stopwatch application built entirely with modern **HTML5**, **CSS3**, and **Vanilla JavaScript**. It delivers professional-grade timing functionality with a focus on **accuracy**, **user experience**, and **aesthetic refinement**.

Whether you're a developer testing UI performance, an athlete timing intervals, a researcher logging events, or a designer crafting micro-interactions—this stopwatch gives you reliable, beautiful, and portable timing at your fingertips.

No frameworks. No trackers. No ads. Just pure, focused timekeeping.

---

## ✨ Key Features

✅ **High-Precision Timing**

- Measures down to **centiseconds** (0.01s)
- Stable timing using `Date.now()` with 10ms update intervals

✅ **Advanced Lap Management**

- Record unlimited laps with auto-incrementing numbering
- Lap history displayed in reverse chronological order (newest first)
- Smooth animations for visual feedback

✅ **Adaptive UI**

- **Dark Mode** (default): Low-glare, high-contrast interface
- **Light Mode**: Clean, minimalist aesthetic
- Theme preference **persisted via `localStorage`**

✅ **Responsive & Accessible**

- Works on **mobile, tablet, and desktop**
- Semantic HTML structure
- Keyboard navigable (enhance with `tabindex`/`aria` as needed)

✅ **Developer-First Design**

- Modular `Stopwatch` class (easy to extend or embed)
- Fully documented source code
- Customizable color scheme and timing precision

✅ **Zero External Dependencies**

- 100% self-contained: **no npm, no CDN, no build step**
- Total bundle size: **< 15 KB** (uncompressed)

---

## 🚀 Getting Started

### 📥 Quick Installation

#### Option 1: Clone from GitHub

```bash
git clone https://github.com/your-username/pro-stopwatch.git
cd pro-stopwatch
# Open index.html in any modern browser
```

#### Option 2: Drag & Drop Integration

Just copy these three files into your project:

```
index.html
styles.css
script.js
```

> 💡 Perfect for **codepen demos**, **portfolio projects**, or **embedded tools**.

---

## 📂 Project Structure

```
pro-stopwatch/
│
├── index.html          # Clean, semantic HTML layout
├── styles.css          # Responsive + theme-aware styling
└── script.js           # Encapsulated Stopwatch class with full logic
```

---

## 🎯 How to Use

| Action        | Button      | Behavior                                               |
| ------------- | ----------- | ------------------------------------------------------ |
| Start Timing  | **Start**   | Begins counting from 00:00:00.00                       |
| Pause Timing  | **Pause**   | Freezes current time                                   |
| Resume Timing | **Resume**  | Continues from paused time                             |
| Record Lap    | **Lap**     | Saves current elapsed time (only active while running) |
| Clear All     | **Reset**   | Erases time + all laps                                 |
| Toggle Theme  | **🌙 / ☀️** | Switches between dark/light mode                       |

> **Pro Tip**: Lap times are **not cumulative**—each shows total elapsed time at moment of capture.

---

## 🧪 Browser Compatibility

| Platform        | Support Status    |
| --------------- | ----------------- |
| Chrome          | ✅ Full (v60+)    |
| Firefox         | ✅ Full (v60+)    |
| Safari          | ✅ Full (v12+)    |
| Edge (Chromium) | ✅ Full           |
| iOS Safari      | ✅ Full (iOS 12+) |
| Android Chrome  | ✅ Full           |

> Built with **progressive enhancement** — degrades gracefully on older browsers.

---

## 🎨 Customization Guide

### 🔧 Change Color Theme

In `styles.css`, update:

```css
:root {
  --primary: #3498db; /* Lap highlight & controls */
  --danger: #e74c3c; /* Reset button */
  --bg-dark: rgba(30, 30, 40, 0.85);
  --bg-light: rgba(250, 250, 255, 0.9);
}
```

### ⚙️ Adjust Timing Granularity

In `script.js`:

```js
// For centisecond precision (default)
setInterval(() => this.update(), 10);

// For millisecond precision (higher CPU usage)
setInterval(() => this.update(), 1);
```

### 📏 Resize for Embedding

Wrap the `.container` in a parent div with fixed width:

```html
<div style="width: 320px; margin: 0 auto;">
  <!-- Pro Stopwatch HTML -->
</div>
```

---

## 📜 License

**MIT License**  
✅ Free for personal & commercial use  
✅ Modify, redistribute, or embed anywhere  
✅ No attribution required (but appreciated!)

---

---

## 💡 Ideal Use Cases

- **Developer Portfolios**: Showcase clean code + UI skills
- **Fitness Apps**: Interval training timers
- **UX Prototypes**: Measure user task completion time
- **Classroom Tools**: Science experiments or quizzes
- **Open-Source Components**: Drop-in timing module

> ⏱️ **Time waits for no one. But with Pro Stopwatch, you’ll never lose track of it again.**
