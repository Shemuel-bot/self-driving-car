# Self-Driving Car Simulation

This project is a small browser-based self-driving car simulator built with plain JavaScript and the HTML5 Canvas API. The goal is to show how a car can use a simple neural network and sensor system to drive down a road while avoiding obstacles.

You can see it live here:
https://shemuel-bot.github.io/self-driving-car/

## What the project does

The simulation creates a set of AI-controlled cars that try to drive along a road while traffic cars move toward them from the top of the screen. Each AI car is equipped with sensors that ray-cast forward to detect the road boundaries and nearby traffic. Those sensor readings are fed into a small neural network, which produces steering and movement decisions.

Over time, the system tries to evolve better driving behavior by keeping the best-performing brain and mutating the others. The best brain can be saved in the browser's local storage so it persists between page reloads.

## How it works

At a high level, the simulation loop runs every animation frame:

1. Traffic cars are updated and moved.
2. AI cars are updated using their sensors and neural network.
3. The road and all cars are drawn to the canvas.
4. The best-performing car is highlighted.
5. The loop repeats continuously.

The core idea is simple:
- Sensors collect information about the environment.
- A neural network converts that information into movement commands.
- The car responds to its surroundings in real time.

## How to run

Open the project in a browser:

1. Open [index.html](index.html) in your browser, or
2. Serve the folder with a simple static server if you prefer (for example, `python3 -m http.server`).

Once the page loads, the simulation starts automatically.

## File-by-file overview

- [index.html](index.html) - The page shell. It defines the canvas, control buttons, and loads all JavaScript files in the correct order.
- [main.js](main.js) - The main entry point. This file creates the road, spawns the cars, initializes the traffic, runs the animation loop, and manages the saving/discarding of the best neural network.
- [car.js](car.js) - Defines the car class. This includes movement physics, collision detection, sensor wiring, drawing, and the logic that uses the neural network to decide how the car moves.
- [controls.js](controls.js) - Handles input states for the car. It supports keyboard input for manual driving and also provides simple control flags used by the simulation.
- [road.js](road.js) - Builds the road, computes lane centers, and draws the road surface and lane markers.
- [sensor.js](sensor.js) - Implements the car's sensors. Each sensor casts rays outward, checks for intersections with the road edges and traffic cars, and records the nearest hit.
- [network.js](network.js) - Contains the neural network implementation. It builds layers of neurons, runs feed-forward inference, and mutates weights and biases to evolve better behavior.
- [utils.js](utils.js) - A small helper module with math utilities like interpolation, line intersection tests, polygon collision checks, and color generation.
- [visualizer.js](visualizer.js) - Provides drawing logic for visualizing the neural network. It is currently available in the project but not actively used in the main simulation loop.
- [carInstantiator.js](carInstantiator.js) - Spawns additional traffic cars over time so the environment becomes more dynamic.
- [style.css](style.css) - Styles the page layout and the canvas interface.

## Notes on the simulation

- The AI cars are created with a neural network that takes sensor input and outputs control values.
- The traffic vehicles are simple dummy cars that just move forward.
- The best-performing car is identified by its position on the road; the one that has progressed the farthest is treated as the current leader.
- The best brain is stored in local storage under `bestBrain`, which makes it possible to reuse a strong network between sessions.

## Technologies used

- JavaScript (ES6+)
- HTML5 Canvas
- CSS

## Possible next steps

If you want to extend the project, a few natural improvements would be:
- Add a visualizer for the neural network to the page.
- Introduce more realistic car physics.
- Add a fitness score based on distance traveled or survival time.
- Let the user switch between manual control and AI control.
