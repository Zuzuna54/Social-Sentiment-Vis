
import { tweetStream } from "./util";
import quesryField from "./query_field";


document.addEventListener("DOMContentLoaded", () => {
    window.tweetStream = tweetStream;
    console.log("this and that")
    const props = {}
    const search = document.getElementById("search");
    const title2 = document.getElementById("title-2");

    search.insertBefore(quesryField(props), title2)
})