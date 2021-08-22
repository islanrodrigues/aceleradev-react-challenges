const user = require("./user")
// @ponicode
describe("user.getUserRequest", () => {
    test("0", () => {
        let callFunction = () => {
            user.getUserRequest()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user.getUserFailed", () => {
    test("0", () => {
        let callFunction = () => {
            user.getUserFailed({ message: "Grader id does not match submission id that was passed in" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            user.getUserFailed({ message: "Could not find a submission object for message from xqueue" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            user.getUserFailed({ message: "The line-by-line profiler can only be used in dev." })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            user.getUserFailed({ message: "No updates are to be performed." })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            user.getUserFailed({ message: "Sorry, The video you are looking for does not exist." })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            user.getUserFailed({ message: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("user.logout", () => {
    test("0", () => {
        let callFunction = () => {
            user.logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})
