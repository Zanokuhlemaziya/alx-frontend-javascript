export default function handleResponseFromAPI(promise) {
   return promise
     status: 200,
     body: "Success",
    }))
      .catch(() => Error())
      .finally(() => console.warn("Got a response from the API"));
}
