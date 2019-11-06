import queryField from "./query_field";

document.addEventListener("DOMContentLoaded", () => {

    const props = {}
    const search = document.getElementById("search");
    const title = document.getElementById("title-1");
    search.insertBefore(queryField(props), title);

    const chart = new Chart(props)
    props.chart = chart
    
    const dummyData = chart.dummyData();
    chart.build(dummyData);

})