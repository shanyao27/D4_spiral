function spiralPath() {
    let center = { x: 300, y: 300 };
    let maxRadius = 250; 
    let points = [];
    for (let i = 0; i <= 500; i++) {
        let step = 1 - i / 500;
        let angle = (3 * Math.PI / 2) + 6 * Math.PI * (1 - step);
        let radius = maxRadius * step;
        let x = center.x + radius * Math.cos(angle + Math.PI);
        let y = center.y + radius * Math.sin(angle + Math.PI);
        points.push({ x, y });
    }
    return points; 
}

function drawSpiralPath(svg) {
    let spiralPoints = spiralPath();
    let spiralLine = d3.line()
        .x(d => d.x)
        .y(d => d.y);
    
    svg.append("path")
        .datum(spiralPoints)
        .attr("d", spiralLine)
        .attr("fill", "none")
        .attr("stroke", "black");
    
    return spiralPoints;
}