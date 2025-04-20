document.addEventListener("DOMContentLoaded", function() {
    let svg = d3.select("svg")
        .attr("width", 600)
        .attr("height", 600);

    function animateSmiley(svg, duration, scaleStart, scaleEnd, rotateStart, rotateEnd) {
        svg.selectAll("*").remove();
        let smiley = createClownFace(svg);
        let spiralPoints = drawSpiralPath(svg);
        smiley.transition()
            .duration(duration)
            .attrTween("transform", function() {
                return function(t) {
                    let index = Math.min(Math.floor(t * spiralPoints.length), spiralPoints.length - 1);
                    let point = spiralPoints[index];
                    let scale = scaleStart + (scaleEnd - scaleStart) * t;
                    let rotate = rotateStart + (rotateEnd - rotateStart) * t;
                    return `translate(${point.x},${point.y}) scale(${scale}) rotate(${rotate})`;
                };
            });
    }

    document.getElementById("animateBtn").addEventListener("click", function() {
        let duration = parseInt(document.getElementById("duration").value);
        let scaleStart = parseFloat(document.getElementById("scaleStart").value);
        let scaleEnd = parseFloat(document.getElementById("scaleEnd").value);
        let rotateStart = parseInt(document.getElementById("rotateStart").value);
        let rotateEnd = parseInt(document.getElementById("rotateEnd").value);
        animateSmiley(svg, duration, scaleStart, scaleEnd, rotateStart, rotateEnd);
    });
    
    document.getElementById("clearBtn").addEventListener("click", function() {
        svg.selectAll("*").remove();
        document.getElementById("duration").value = 3000;
        document.getElementById("scaleStart").value = 1;
        document.getElementById("scaleEnd").value = 1;
        document.getElementById("rotateStart").value = 0;
        document.getElementById("rotateEnd").value = 0;
    });
});