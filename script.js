document.addEventListener("DOMContentLoaded", function () {
    // Define new project content
    const projectContent = `
        <h3>Conversion of Waste Plastic into Fuel and Its Utilization in SI Engine</h3>
        <p><strong>Duration:</strong> May 2022 - March 2023</p>
        <p><strong>Location:</strong> Pokhara, Nepal</p>
        <ul>
            <li>Converted waste plastic into fuel.</li>
            <li>Determined physical and chemical properties of the extracted fuel.</li>
            <li>Performed fractional distillation and compared it with commercial petrol.</li>
            <li>Studied the effect on petrol engine performance, including mileage and emissions.</li>
        </ul>
    `;

    // Select the project section in your HTML
    const projectSection = document.getElementById("projects"); // Change to the correct ID or class

    if (projectSection) {
        projectSection.innerHTML = projectContent;
    } else {
        console.error("Project section not found!");
    }
});
