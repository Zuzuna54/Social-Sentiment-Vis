import { tweetStream } from "./util"

export default (props) => {
    const form = document.createElement("form");
    
    const queryInput = document.createElement("input");
    queryInput.setAttribute("type", "text");
    queryInput.setAttribute("class", "query-field");
    queryInput.setAttribute("z-index", "100");


    setTimeout( () =>{
        typingWord(queryInput);
    }, 1000)
    
    form.appendChild(queryInput)
    form.addEventListener("submit", () => {
        event.preventDefault()

        handleTyping(event, props, queryInput)
    })
                            
    return (
        form
    )
}

const typingWord = (queryInput) => {
    const options = [
        "London, 25",
        "Ants, 50",
        "Bears, 33",
        "Beets, 100",
        "Congress, 230",
        "Bananas, 45",
        "Cheese, 77",
        "Trump, 1000",
        "Penguins, 20",
        "The senate, 100",
        "Google, 120",
        "Space Travel, 50",
        "Tesla, 45",
        "BMW, 100",
        "Supra, 20",
        "Dogs, 100"
    ]
    const str = options[Math.floor(Math.random() * options.length)]
    let i = 0;

    const cycle = setInterval( function(){
        const rand = Math.random()
        if (rand > 0.3) {
            i++
            queryInput.setAttribute("placeholder", str.slice(0, i))
        }
        if (i >= str.length){
            queryInput.removeEventListener("focus", clearInput(queryInput, cycle));
            clearInterval(cycle)
            setTimeout(()=>{
                queryInput.setAttribute("placeholder", "")
                typingWord(queryInput)
            }, 1500)
        }
    }, 200)
    queryInput.addEventListener("focus", clearInput(queryInput, cycle))
}

const clearInput = (queryInput, cycle) => () => {
    clearInterval(cycle)
    queryInput.setAttribute("placeholder", "")
}

const handleTyping = (event,props, queryInput) => {
    event.preventDefault();
    // const chart = props.chart
    const value = queryInput.value;

    const request = () => {
        const parts = value.split(",");
        const obj = { queryStr: parts[0], queryNum: parseInt(parts[1]) };
        return obj
    } 

    tweetStream(request())
        .then(response => {
            // while(response.length < request().queryNum) {
            //     tweetStream(request()).then(response => {console.log(response)})
            // }
            console.log(response)
            // const payload = {}
            // payload.query = value
            // payload.articles = response.articles
            // return payload
        })
        // })
        // .then(payload => processData(payload)) 
        // .then((payload) => {
        //     chart.render(payload)
        // })
}


// Use for testing functionality, sourced from: https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
const debounce = (delay, fn) => {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}

const debouncedTyping = debounce(700, handleTyping);