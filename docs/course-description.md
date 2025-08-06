# Course Description

## Title: Lambda Graphs: Visualizing Functional Computation with Graph Data Structures

This course is ideal for upper-level undergraduates or early graduate students interested in functional programming, graph theory, and interactive visualization.

## 🎯 Course Objective

Equip students with the conceptual and practical skills to:

* Represent lambda expressions as graphs.
* Perform graph-based β-reduction.
* Build and visualize expression evaluations.
* Use graph data structures to encode and simulate computation rules.


## 📚 Course Outline

### **Module 1: Introduction to Lambda Calculus**

* History and significance
* Syntax and semantics
  * Variables
  * Abstractions (λx.E)
  * Applications (E1 E2)
* Free vs. bound variables
* Alpha conversion, beta reduction

### **Module 2: Graph Theory Basics**

* Nodes, edges, directed graphs
* Tree vs. graph structures
* Graph traversal
* Encoding expressions in graph structures

### **Module 3: Lambda Expressions as Graphs**

* Representing:

  * Application nodes
  * Lambda abstractions
  * Constants and variables
* Designing visual graph grammars
* Introduction to the node color/label legend used in visualizations

### **Module 4: Step-by-Step β-Reduction as Graph Rewrite Rules**

* Rule-driven transformation systems
* Animation of reduction steps
* State transitions and intermediate graph representations
* Example: `((λx.λy.x) A) B → A` (from your uploaded file)
* Concept of "App1", "App2", etc., to model reduction context

### **Module 5: Implementing Graph-Based Evaluation in JavaScript**

* Introduction to p5.js for visualization
* Coding node/edge drawing functions
* Mouse interaction and control panel for stepping through evaluation
* Implementing dynamic state visualization
* Graph styling: color codes and positioning

### **Module 6: Representing Complex Expressions**

* Nesting applications and abstractions
* Currying and higher-order functions
* Capturing variable scopes visually
* Challenge: visualizing the Y combinator

### **Module 7: Lambda Graph Rewriting Engines**

* Overview of graph rewriting systems
* Rule matching and application
* Garbage collection of unused nodes
* Using graph databases (optional): storing expression history

### **Module 8: Final Projects**

Students choose one:

* Animate a non-trivial lambda expression reduction.
* Extend the visualization to include alpha conversions or variable capture detection.
* Store all evaluation steps as a traversable graph history.
* Implement interactive exploration of function application trees.

## 🛠️ Tools and Technologies

* [p5.js](https://p5js.org/)
* Graph libraries (optional): vis.js, Cytoscape.js
* JavaScript + HTML5 Canvas
* Optionally: TigerGraph or Neo4j for advanced graph database modeling

## 🧪 Assessment Methods

* Quizzes on lambda and graph concepts
* Labs: build graph visualizations of increasing complexity
* Midterm: implement and animate a 3-step lambda evaluation
* Final project: student-defined simulation or visualization

## 📘 Recommended Readings

* *Types and Programming Languages* by Benjamin C. Pierce
* *Lambda-Calculus and Combinators* by Hindley & Seldin
* p5.js documentation
* Graph theory resources (MIT OpenCourseWare, etc.)

