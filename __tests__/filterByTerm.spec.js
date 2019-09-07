const filterByTerm = require("../src/filterByTerm");

describe("Filter Function", () => {
    //test stuff
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
            { id: 2, url: "https://www.url2.dev"},
            { id: 3, url: "https://www.link3.dev"},
        ]
        const output = [{ id: 3, url: "https://www.link3.dev"},]

        expect (filterByTerm(input, "link")).toEqual(output)
        
        expect (filterByTerm(input, "LINK")).toEqual(output)
       
    })

    test("it should filter by a search term (url)" , () => {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
            { id: 2, url: "https://www.url2.dev"},
            { id: 3, url: "https://www.link3.dev"},
        ]

        const output = [
            { id: 1, url: "https://www.url1.dev"},
  
        ]

        expect (filterByTerm(input, "https://www.url1.dev")).toEqual(output)
    })

    test("it should throw an error when inputArr is empty ()", () => {
        const input={}

        expect (filterByTerm(input, "[]")).toEqual("inputArr cannot be empty")
    })


       test("it should throw an error when searchTerm is empty ()", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
            { id: 2, url: "https://www.url2.dev"},
            { id: 3, url: "https://www.link3.dev"},
        ]

        expect (filterByTerm(input, )).toEqual("searchTerm cannot be empty")
    })

})