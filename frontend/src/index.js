
import { tweetStream } from "./util";
import queryField from "./query_field";

document.addEventListener("DOMContentLoaded", () => {
    window.tweetStream = tweetStream;
    const props = {}
    const search = document.getElementById("search");
    const title = document.getElementById("title-1");
    search.insertBefore(queryField(props), title)
})