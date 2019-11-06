import {
    conditionalBackgroundColor,
    conditionalColor,
    conditionalDisplay,
    conditionalOpacity,
    conditionalTitleColor,
    fillArticleInfo,
    handleDotUX,
    generateDateRange,
    mergeLineData,
    initialRender,
    handleArticleScroll
} from './chart_utils'


export default class Chart {
    constructor(props) {
        this.data = props.data
        this.margin = {
            top: 30,
            right: 20,
            bottom: 30,
            left: 30,
        }
        this.cutoff = 3
        this.good = this.cutoff
        this.bad = this.cutoff * -1
        this.width = 810 - this.margin.left - this.margin.right;
        this.height = 370 - this.margin.top - this.margin.bottom;
        this.svg = d3.select('svg')
            .attr("viewBox", `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`)
            // .style('background-color', 'rgba(190,190,190,1)')
            .style('background-color', 'transparent')
            .append("g")
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)
        const today = new Date()
        this.startDate = new Date(today.setDate(today.getDate() - 31))
        this.endDate = new Date();
        this.dateRange = generateDateRange(this.startDate, this.endDate)
        this.xFormat = "%b-%d";
        this.initialize = true;
        this.selectedDot = { "dot": "" };
    }

    export default class Chart{
    constructor(props){
        this.data = props.data
        this.margin = {
            top: 30,
            right: 20,
            bottom: 30,
            left: 30,
        }
        this.cutoff = 3
        this.good = this.cutoff
        this.bad = this.cutoff * -1
        this.width = 810 - this.margin.left - this.margin.right;
        this.height = 370 - this.margin.top - this.margin.bottom;
        this.svg = d3.select('svg')
            .attr("viewBox", `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`)
            // .style('background-color', 'rgba(190,190,190,1)')
            .style('background-color', 'transparent')
            .append("g")
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)
        const today = new Date()
        this.startDate = new Date(today.setDate(today.getDate() - 31))
        this.endDate = new Date();
        this.dateRange = generateDateRange(this.startDate, this.endDate)
        this.xFormat = "%b-%d";
        this.initialize = true;
        this.selectedDot = {"dot": ""};
    }


    render(payload) {
        const { scatterData, total } = payload
        const { svg, height, width, good, bad, xFormat, margin, gX, gY, selectedDot } = this
        const ydata = []
        const singleArticleInfo = d3.select(".article-info-container")
        const lineData = mergeLineData(this.dateRange, payload.lineData)
        let initialize_duration
        if (this.initialize) {
            initialize_duration = 2500
        } else {
            initialize_duration = 0
        }
        this.initialize = initialRender(svg, initialize_duration)
        conditionalTitleColor(total);
        conditionalBackgroundColor(total);

        scatterData.forEach(datum => {
            ydata.push(datum.y)
        })

        const parseTime = d3.timeParse("%Y-%m-%d")

        const xscl = d3.scaleTime()
            .domain(d3.extent(lineData, d => { return parseTime(d.x) }))
            .range([0, width]);

        const x_axis = d3.axisBottom()
            .scale(xscl)

        const yscl = d3.scaleLinear()
            .domain([d3.max(ydata) * 1.05, d3.min(ydata) * 1.05])
            .range([0, height]);


        svg.select(".xaxis")
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("transform", `translate(0,${yscl(0)})`)
            .call(x_axis.tickFormat(d3.timeFormat(xFormat)))
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start")
            .style("fill", "rgba(255,255,255,1)")
            .style("opacity", 1)


        svg.select(".neutral-label")
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("y", yscl(0) - 5)
            .attr("x", 15)
            .style("fill", "rgba(0, 0, 0, 0.6)")


        svg.select(".good-label")
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("y", yscl(good) - 5)
            .attr("x", 15)
            .attr("display", () => conditionalDisplay(yscl(good), 0, false))
            .style("fill", "rgba(0, 0, 0, 0.6)")
  

        svg.select(".bad-label")
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("y", yscl(bad) + 15)
            .attr("x", 15)
            .attr("display", () => conditionalDisplay(yscl(bad), height, true))
            .style("fill", "rgba(0, 0, 0, 0.6)")

        svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height)

        const area = d3.area()
            .x(function (d) { return xscl(parseTime(d.x)) })
            .y0(height)
            .y1(yscl(bad))

        const goodArea = d3.area()
            .x(function (d) { return xscl(parseTime(d.x)) })
            .y0(0)
            .y1(yscl(good))

        const neutralArea = d3.area()
            .x(function (d) { return xscl(parseTime(d.x)) })
            .y0(yscl(good))
            .y1(yscl(bad))

        svg.select(".neutral-area")
            .data([scatterData])
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("d", neutralArea)
            .style("fill", "rgba(255,255,255,0.1)")

        svg.select(".area")
            .data([scatterData])
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("d", area)
            .style("fill", "rgba(255,0,0,0.1)")

        svg.select(".good-area")
            .data([scatterData])
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("d", goodArea)
            .style("fill", "rgba(0,255,0,0.1)")


        svg.select(".good-line")
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("x1", 0)
            .attr("y1", yscl(good))
            .attr("x2", width)
            .attr("y2", yscl(good))
            .attr("display", () => conditionalDisplay(yscl(good), 0, false))
            .style("stroke", "rgba(32, 196, 168,0.3)")
            .style("stroke-width", "2px")

        svg.select(".bad-line")
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("x1", 0)
            .attr("y1", yscl(bad))
            .attr("x2", width)
            .attr("y2", yscl(bad))
            .attr("display", () => conditionalDisplay(yscl(bad), height, true))
            .style("stroke", "rgba(200, 0, 0, 0.3)")
            .style("stroke-width", "2px")


        const close = d3.select("#close-modal");
        const modal = d3.select(".instruction-modal")
        close
            .on("click", () => {
                modal
                    .style("display", "none")
            });


        const createDots = svg.selectAll(".dot")
            .data(scatterData)
            .enter().append("circle")
            .attr("class", "dot")

        createDots
            .on("click", function (d) {
                // window.open(d.url, "_blank")
                selectedDot.dot = d3.select(this)
                fillArticleInfo(singleArticleInfo, d)
                d3.selectAll(".dot")
                    .style("fill", d => conditionalColor(d, good, bad))
                    .style("opacity", d => conditionalOpacity(d, good, bad))
                selectedDot.dot
                    .style("opacity", 1)
                    .style("fill", "darkblue");

            })
            .on("dblclick", d => {
                window.open(d.url, "_blank")
            })
            .on("mouseover", function (d, i) {
                const dot = d3.select(this)

                dot
                    .transition()
                    .ease(d3.easeElastic)
                    .duration(500)
                    .attr("r", 10)

                dot
                    .style("opacity", 1)
                    .style("fill", "blue")

                d3.selectAll(".article-list-item")
                    .style("background", d => conditionalColor(d, good, bad, 0.3));
                handleArticleScroll(i)

            })
            .on("mouseout", function (d) {
                const dot = d3.select(this);
                dot
                    .transition()
                    .ease(d3.easeElastic)
                    .duration(500)
                    .attr("r", 8)

                dot
                    .style("fill", d => conditionalColor(d, good, bad))
                    .style("opacity", d => conditionalOpacity(d, good, bad))

                selectedDot.dot
                    .style("opacity", 1)
                    .style("fill", "darkblue");

            })

        createDots
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", function (d) {
                if (d.title === total.highScore.title) {
                    selectedDot.dot = d3.select(this)
                    return 1
                }
                return 8
            })
            .attr("id", (_, i) => { return "dot_" + i })
            .style("opacity", d => conditionalOpacity(d, good, bad))
            .style("fill", d => conditionalColor(d, good, bad));

        const articlesContainer = d3.select("#articles-list")
            .selectAll("li")
            .data(scatterData)

        articlesContainer
            .enter().append("li")
            .attr("class", "article-list-item")
            .attr("id", (_, i) => { return "article_" + i })
            .style("background", d => conditionalColor(d, good, bad, 0.3))
            .text(function (d) {
                const date = new Date(new Date(d.x).setDate(new Date(d.x).getDate() + 1))
                const options = { month: 'short', day: 'numeric' }
                return `${date.toLocaleDateString("en-US", options)}: ${d.title}`
            })
            .on("click", function (d, i) {
                selectedDot.dot = d3.select(`#dot_${i}`)

                d3.selectAll(".dot")
                    .style("fill", d => conditionalColor(d, good, bad))
                    .style("opacity", d => conditionalOpacity(d, good, bad));
                selectedDot.dot
                    .style("opacity", 1)
                    .style("fill", "darkblue");
                d3.select(`#dot_${i}`)
                    .attr("r", function (d, i) {
                        bigDot = d3.select(this)
                        handleDotUX(d, bigDot, singleArticleInfo, 0.2);
                        return 20
                    });

                d3.select(`#article_${i}`)
                    .style("background", "rgba(0, 0, 139, 0.5)")
            })
            .on("dblclick", d => {
                window.open(d.url, "_blank")
            })
            .on("mouseover", function (d, i) {
                d3.selectAll(".article-list-item")
                    .style("background", d => conditionalColor(d, good, bad, 0.3));
                d3.select(this)
                    .style("background", "rgba(0, 0, 139, 0.5)");

                d3.selectAll(".dot")
                    .style("fill", d => conditionalColor(d, good, bad))
                    .style("opacity", d => conditionalOpacity(d, good, bad));
                d3.select(`#dot_${i}`)
                    .style("opacity", 1)
                    .style("fill", "blue");

                selectedDot.dot
                    .style("opacity", 1)
                    .style("fill", "darkblue");

            })
            .on("mouseout", () => {
                d3.selectAll(".dot")
                    .style("fill", (d) => conditionalColor(d, good, bad))
                    .style("opacity", (d) => conditionalOpacity(d, good, bad));

                selectedDot.dot
                    .style("opacity", 1)
                    .style("fill", "darkblue");

            })

        d3.selectAll(".article-list-item")
            .transition("appear-articles")
            .ease(d3.easeCubic)
            .duration(1500)
            .style("opacity", 1)

        articlesContainer
            .style("background", d => conditionalColor(d, good, bad, 0.3))
            .text(function (d) {
                const date = new Date(d.x)
                const options = { month: 'short', day: 'numeric' }
                return `${date.toLocaleDateString("en-US", options)}: ${d.title}`
            })

        articlesContainer
            .exit().remove()

        const updateDots = svg.selectAll(".dot")
            .data(scatterData)

        let bigDot;
        updateDots
            .transition()
            .delay(initialize_duration)
            .ease(d3.easeExp)
            .duration(1700)
            .attr("class", "dot")
            .attr("cx", d => { return xscl(parseTime(d.x)) })
            .attr("cy", d => { return yscl(d.y) })
            .attr("r", function (d, i) {
                let r;
                if (d.title === total.highScore.title) {
                    bigDot = d3.select(this)
                    handleDotUX(d, bigDot, singleArticleInfo, 1, initialize_duration);
                    handleArticleScroll(i)
                    r = 20
                } else {
                    r = 8
                }
                return r
            })
            .style("opacity", d => conditionalOpacity(d, good, bad))
            .style("fill", d => conditionalColor(d, good, bad));

        svg.selectAll(".dot")
            .data(scatterData)
            .exit().remove();
    }

}