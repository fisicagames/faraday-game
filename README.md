# Faraday Game ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Babylon.js](https://img.shields.io/badge/Babylon.js-7.5.0-purple.svg)](https://www.babylonjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5.2.11-yellow.svg)](https://vitejs.dev/)

An interactive simulation on Faraday's Law of Electromagnetic Induction — the first SHIFT simulation to introduce a custom **callback-based Mediator pattern** for event flow.

### [🎮 Play Now!](https://fisicagames.com.br/)

---

## 📄 Table of Contents

* [About the Game](#-about-the-game)
* [Key Features](#-key-features)
* [How to Play](#-how-to-play)
* [Tech Stack](#-tech-stack)
* [Installation and Setup](#-installation-and-setup)
* [Architecture and Technical Highlights](#-architecture-and-technical-highlights)
* [License](#-license)
* [Author](#-author)

---

## 📖 About the Game

**Faraday Game** is the sixth simulation of the SHIFT series, developed in a single weekend (December 7–8, 2024). It illustrates Faraday's Law of Electromagnetic Induction by allowing the player to move a magnet in two distinct ways — angular (rotating in front of the coil) or linear (moving vertically through the coil) — to induce voltage and light up a lamp.

The faster the magnet moves, the greater the rate of change of magnetic flux, and the higher the induced voltage and light intensity. The game was developed quickly, validating both the MVC architecture introduced in the previous simulation and a new event-flow pattern based on chained callbacks.

---

## ✨ Key Features

* **Single-Button Interaction:** Single-button or touch control for accessible and engaging gameplay.
* **Two Game Modes:**
  * **Angular Motion:** The magnet rotates in front of the coil.
  * **Linear Motion:** The magnet moves vertically through the coil.
* **Score System:** The voltage generated in the coil is converted into a score:
  * 🥇 **Gold:** 24 V or higher.
  * 🥈 **Silver:** 60 V or higher.
  * 🥉 **Bronze:** 110 V or higher.
* **Multilingual:** Native support for Portuguese and English.
* **Easter Egg "Hack Mode":** Use multiple touches (mobile) or keys (keyboard) to discover a hidden mode that generates much higher voltages.
* **Photosensitivity Awareness:** Two visual effect modes — **Intense Effects** (full experience with rapid lighting changes) and **Soft Effects** (adapted for users with photosensitive conditions).

---

## 🕹 How to Play

**Objective:** Move the magnet as fast as possible to maximize the induced voltage and light up the lamp.

#### Controls

💻 **On PC:** Spacebar or any key — multiple key presses trigger the easter egg "hack mode".

📱 **On Mobile / Touch:** Tap the on-screen button — multiple touches trigger "hack mode".

#### Game Modes

* **Angular:** Rotate the magnet in front of the coil.
* **Linear:** Move the magnet vertically through the coil.

---

## 🛠 Tech Stack

| Tool                                       | Version | Description                                                              |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------ |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.2   | Core language, providing type safety and modular architecture.           |
| [Babylon.js](https://www.babylonjs.com/)      | 7.5.0   | Graphics engine for 3D rendering, animations, particles, and GUI system. |
| [Vite.js](https://vitejs.dev/)                | 5.2.11  | Build tool for ES6 module compilation, tree-shaking, and optimization.   |
| [Node.js](https://nodejs.org/en)              | 20+     | Development environment and runtime.                                     |

---

## 🚀 Installation and Setup

**Prerequisites:** Node.js (v20+), npm (v10+).

```sh
npm install
npm run dev      # development server
npm run build    # production build (generates the dist folder)
```

---

## 🏗 Architecture and Technical Highlights

**Faraday Game** consolidates the MVC architecture introduced in *Pendulum Goal* and adds a new pattern: a custom **callback-based Mediator pattern** for event flow between modules.

#### The Callback-Based Mediator Pattern

Rather than using a centralized event bus or pub/sub system, this simulation introduces an explicit linear event flow. When an inner class needs to communicate with an outer class, the event passes through every intermediate class as a chained callback, where each intermediate may intercept, augment, or simply forward the event.

For a chain `A → C → B`, where `C` is intermediate, `C` registers a callback for `A` and forwards (with optional behavior added) to `B`. This produces:

* **Linear traceability** of event flow — easy to follow during debugging.
* **Direct coupling only between adjacent classes** — minimizing surface area for bugs.
* **Flexibility** — any intermediate class can become a mediator without modifying source or destination classes.
* **No state machines or central event managers** — flow is explicit and sequential.

This pattern adapts ideas from the **Mediator**, **Observer**, and **Chain of Responsibility** classical design patterns into a custom solution tailored to the needs of the SHIFT framework.

#### Physics Modeling

The simulation implements a simplified version of **Faraday's Law of Induction**:

```
ε = −N · dΦ_B / dt
```

* **Angular mode:** The induced voltage is approximated as proportional to `−sin(θ) · ω`, where θ is the rotation angle and ω the angular velocity.
* **Linear mode:** The induced voltage is approximated as proportional to `v · cos(y / 16.5)`, where v is the magnet's linear velocity and y its vertical position relative to the coil. The cosine modulation is a heuristic, not physically rigorous, but sufficient to capture the sign change of the induced EMF as the magnet enters and exits the coil.

The lamp brightness is computed in real time as `Math.abs(component * 500)`. A simplified mode (without the positional modulation) is provided as the **Soft Effects** option for users with photosensitive conditions.

The simplifications were intentional, prioritizing fast development (two days) and a hypercasual interaction style over physical rigor. The simulation succeeds in conveying the qualitative relationship between magnet motion and induced voltage.

---

## 📸 Screenshots

<p align="center">
  <img src="image/README/1736427437192.png" width="22%" alt="Faraday Game screenshot 1" />
  <img src="image/README/1736430149649.png" width="22%" alt="Faraday Game screenshot 2" />
  <img src="image/README/1736427290232.png" width="22%" alt="Faraday Game screenshot 3" />
  <img src="image/README/1736427372093.png" width="22%" alt="Faraday Game screenshot 4" />
</p>

---

## 📜 License

### Source Code

The source code in this repository is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file.

### Visual Assets

3D models, textures, and original visual content created by the author are licensed under **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

### Audio Assets

Music and sound effects in this project are sourced from [Pixabay](https://pixabay.com/) under the [Pixabay Content License](https://pixabay.com/service/license-summary/), which permits free use including for commercial purposes.

### Third-Party Libraries

* **Babylon.js** — Apache License 2.0
* **Vite.js** — MIT License

**Copyright © 2024 Rafael João Ribeiro.**

---

## 👨‍🔬 Author

Developed by:
**Prof. Dr. Rafael João Ribeiro**
Federal Institute of Paraná (IFPR)
[www.fisicagames.com.br](https://www.fisicagames.com.br)
