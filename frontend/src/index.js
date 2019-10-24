
import { tweetStream } from "./util"


document.addEventListener("DOMContentLoaded", () => {
    window.tweetsLoader = tweetStream;
})