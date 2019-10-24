const conditionalTitleColor = (total) => {
    d3.select(".title-1")
        .data([total])
        .transition()
        .ease(d3.easeExp)
        .duration(2000)
        .style("color", d => {
            if (d.average > 0.13) {
                return `rgba(${32 * Math.sqrt(d.average)}, ${196 * Math.sqrt(d.average)}, ${168 * Math.sqrt(d.average)}, 0.97)`
            } else if (d.average < -0.13) {
                return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
            } else {
                return `rgba(255,255,255,0.8)`
            }
        })
    d3.select(".title-2")
        .data([total])
        .transition()
        .ease(d3.easeExp)
        .duration(2000)
        .style("color", d => {
            if (d.average > 0.13) {
                return `rgba(${32 * Math.sqrt(d.average)}, ${196 * Math.sqrt(d.average)}, ${168 * Math.sqrt(d.average)}, 0.97)`
            } else if (d.average < -0.13) {
                return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
            } else {
                return `rgba(255,255,255,0.8)`
            }
        })
}