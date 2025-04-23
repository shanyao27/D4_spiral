function createClownFace(svg) {
    let clown = svg.append("g");
    clown.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 25)  
        .attr("fill", "#FFF9C4")  
        .attr("stroke", "#FF9800")  
        .attr("stroke-width", 4);
    clown.append("ellipse")
        .attr("cx", -10)
        .attr("cy", -7.5)
        .attr("rx", 4)
        .attr("ry", 6)
        .attr("fill", "lightblue");      
    clown.append("ellipse")
        .attr("cx", 10)
        .attr("cy", -7.5)
        .attr("rx", 4)
        .attr("ry", 6)
        .attr("fill", "lightblue");   
    clown.append("circle")
        .attr("cx", -10)
        .attr("cy", -7.5)
        .attr("r", 2)
        .attr("fill", "black");   
    clown.append("circle")
        .attr("cx", 10)
        .attr("cy", -7.5)
        .attr("r", 2)
        .attr("fill", "black");   
    clown.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 6)
        .attr("fill", "red"); 
    clown.append("ellipse")
        .attr("cx", 0)
        .attr("cy", 15)
        .attr("rx",  7.5)
        .attr("ry", 4)
        .attr("fill", "red");
    clown.append("circle")
        .attr("cx", -12.5)
        .attr("cy", 2.5)
        .attr("r", 4)
        .attr("fill", "lightpink")   
    clown.append("circle")
        .attr("cx", 12.5)
        .attr("cy", 2.5)
        .attr("r", 4)
        .attr("fill", "lightpink");
   
    return clown;
}