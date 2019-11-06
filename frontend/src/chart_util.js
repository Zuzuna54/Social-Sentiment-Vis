const conditionalTitleColor = (total) => {
    d3.select(".chart-title")
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
    d3.select("#second-title")
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

const conditionalDisplay = (attr_value, cutoff, greaterThan = true) => {
    switch (greaterThan) {
        case true:
            if (attr_value > cutoff) {
                return "none"
            } else {
                return "inherit"
            }
        case false:
            if (attr_value < cutoff) {
                return "none"
            } else {
                return "inherit"
            }
        default:
            return "inherit"
    }
}

const conditionalOpacity = (d, good, bad) => {
    if (d.y >= good) {
        return "0.8"
    } else if (d.y <= bad) {
        return "0.6"
    } else {
        return "0.3"
    }
}

const conditionalColor = (d, good, bad, opacity = 1) => {
    if (d.y >= good) {
        return `rgba(32,196,168, ${opacity}`
    } else if (d.y <= bad) {
        return `rgba(255,0,0, ${opacity}`
    } else {
        return `rgba(255,255,255, ${opacity}`
    }
}

const fillArticleInfo = (singleArticleInfo, d) => {
    singleArticleInfo.select(".article-title")
        .text(
            `${d.title}`
        ).transition()
        .ease(d3.easeExp)
        .duration(1700)
        .style("color", "rgba(255,255,255, 0.5)");
    singleArticleInfo.select(".article-author")
        .text(
            `${d.source}`
        ).transition()
        .ease(d3.easeExp)
        .duration(1700)
        .style("color", "rgba(255,255,255, 0.5)");

    singleArticleInfo.select(".article-description")
        .text(
            `${d.description}`
        )
        .transition()
        .ease(d3.easeExp)
        .duration(1700)
        .style("color", "rgba(255,255,255, 0.5)")

    singleArticleInfo.select(".article-image")
        .attr("src", `${d.image}`)
    singleArticleInfo.select(".read-more")
        .attr("href", `${d.url}`)
}

const handleDotUX = (d, bigDot, singleArticleInfo, speed = 1, intialize_duration = 0) => {
    const delay = 2000 + intialize_duration
    if (speed >= 1) {
        bigDot
            .transition()
            .delay(delay)
            .ease(d3.easeElastic)
            .duration(2500)
            .attr("r", 8)
            .style("fill", "darkblue")
            .style("opacity", 1);
        if (speed >= 1) {
            singleArticleInfo
                .transition()
                .delay(delay + 500)
                .duration(800)
                .style("background-color", "rgba(0, 0, 139, 0.5)");

            fillArticleInfo(singleArticleInfo, d);

            singleArticleInfo
                .transition()
                .delay(delay + 1350)
                .duration(800)
                .style("background-color", "transparent")
        }
    } else {
        bigDot
            .style("fill", "darkblue")
            .style("opacity", 1);
        bigDot
            .transition()
            .ease(d3.easeLinear)
            .duration(300)
            .attr("r", 8)
        fillArticleInfo(singleArticleInfo, d);
    }
}

Date.prototype.addDay = function () {
    this.setDate(this.getDate() + 1)
}

const generateDateRange = (startDate, endDate) => {
    const dates = []
    let currentDate = startDate
    while (currentDate < endDate) {
        const date = new Date(currentDate)
        const formattedDate = `${date.getFullYear()}` + "-" + `0${date.getMonth() + 1}` + "-" + `${date.getDate()}`
        dates.push({ [formattedDate]: { x: formattedDate, y: null } })
        currentDate.addDay()
    }
    return dates
}

const sortDate = (a, b) => {
    const date1 = new Date(a.x)
    const date2 = new Date(b.x)
    if (date1 >= date2) {
        return 1
    } else {
        return -1
    }
}

const mergeLineData = (dateRange, lineData) => {
    const mergedData = Object.assign([], dateRange, lineData)
    const unkeyedData = []
    mergedData.forEach(outerDatum => {
        unkeyedData.push(Object.values(outerDatum))
    })
    return unkeyedData.flat().sort(sortDate)
}



const initialRender = (svg, intialize_duration, total) => {

    d3.select("html")
        .transition("appear")
        .ease(d3.easeQuad)
        .duration(intialize_duration - 1500)
        .attr("background-image", "none")
   
    d3.select("#main")
        .transition("appear")
        .ease(d3.easeQuad)
        .duration(intialize_duration - 1500)
        .style("top", "0px")


    d3.select(".article-image")
        .transition("appear")
        .delay(800)
        .ease(d3.easeExp)
        .duration(intialize_duration + 1000)
        .style("opacity", 1)

    d3.select(".info-container")
        .transition("appear")
        .delay(800)
        .ease(d3.easeExp)
        .duration(intialize_duration + 1000)
        .style("opacity", 1)

    return false


}

const handleArticleScroll = i => {
    document.getElementById(`article_${i}`).scrollIntoView({
        behavior: "smooth",
        block: "center"
    })

    d3.select(`#article_${i}`)
        .style("background", "rgba(0, 0, 139, 0.5)")

}

const conditionalBackgroundColor = (total) => {
    d3.select("html")
        .data([total])
        .transition()
        .ease(d3.easeQuad)
        .duration(2000)
        .style("background-color", d => {
            if (d.average > 0.13) {
                return `rgba(${32 * Math.sqrt(d.average)}, ${196 * Math.sqrt(d.average)}, ${168 * Math.sqrt(d.average)}, 0.97)`
            } else if (d.average < -0.13) {
                return `rgba(${128 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, ${40 * Math.sqrt(Math.abs(d.average))}, 0.97)`
            } else {
                return `rgba(50,50,50,0.8)`
            }
        })
}

export {
    conditionalBackgroundColor,
    conditionalTitleColor,
    conditionalDisplay,
    conditionalOpacity,
    conditionalColor,
    fillArticleInfo,
    handleDotUX,
    generateDateRange,
    sortDate,
    mergeLineData,
    initialRender,
    handleArticleScroll
}