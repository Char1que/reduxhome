
const initialState = {
    chats: [
        {
            id: 1,
            name: "Andrey"
        },
        {
            id: 2,
            name: "Denis"
        }
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}