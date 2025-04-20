function sprialPath() {
    let center = { x: 300, y: 300 };
    let circles = 3;
    let maxRadius = 250;
    let points = 500;
    let pointsArray = [];
    
    for (let i = 0; i <= points; i++) {
        let t = (points - i) / points * circles * Math.PI * 2;
        let radius = maxRadius * t / (circles * Math.PI * 2);
        let x = center.x + radius * Math.cos(-t + Math.PI/2);
        let y = center.y + radius * Math.sin(-t + Math.PI/2);
        pointsArray.push({ x, y });
    }
    return pointsArray;
}

function drawSpiralPath(svg) {
    let spiralPoints = sprialPath();
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