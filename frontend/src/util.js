// need to add ajax calls here to grab tweets from th front end 

export const tweetStream = (data) => (
    $.ajax({
        url: "/",
        method: "GET",
        data: data
    })
)

// neeed to test this

