# Lambda Graph Version 2 in Vis.js

[Run the Lambda Graph Visualization MicroSim](./main.html)

Here is lambda graph visualization using Vis.js while maintaining the same educational interface and functionality. Here are the key features preserved in the conversion:

## Key Features 

1.  **Three-Step Progression**: The same three buttons allow students to navigate through the beta-reduction steps:
    -   Step 1: Full expression ((λx.λy.x) A) B
    -   Step 2: First reduction (λy.A) B
    -   Step 3: Final result A
2.  **Color Coding**: The same color scheme for node types:
    -   Light blue (`#bbdefb`) for Application nodes
    -   Light orange (`#ffe0b2`) for Lambda Abstractions
    -   Light yellow (`#fff9c4`) for Bound Variables
    -   Light green (`#c8e6c9`) for Input Constants
3.  **Legend**: A clear legend showing what each color represents
4.  **Step Descriptions**: Educational descriptions explaining what happens at each reduction step

Improvements with Vis.js
------------------------

-   **Automatic Layout**: Vis.js handles the hierarchical tree layout automatically, ensuring consistent and clean graph visualization
-   **Interactive**: Users can zoom and pan the graph for better exploration
-   **Responsive**: The visualization adapts to different screen sizes
-   **Cleaner Code**: More maintainable structure using Vis.js's data-driven approach

Usage
-----

The visualization can be embedded directly in your mkdocs course pages as an iframe or included as a standalone HTML page. The interface remains consistent with the original p5.js version, so students will have a familiar experience while benefiting from the improved graph rendering capabilities of Vis.js.

The hierarchical layout automatically arranges nodes from top to bottom, making the tree structure of lambda expressions clear and easy to follow.