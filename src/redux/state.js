

let state = {
messagesPage: [{
    dialogData: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Misha" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Luba" },
        { id: 5, name: "Gena" },
        { id: 6, name: "Rita" },
    ],
    inboxData: [
        { id: 1, inbox: "Привет" },
        { id: 2, inbox: "Как дела" },
        { id: 3, inbox: "Что нового?" },
    ]
}]
    ,postData: [
        { id: 1, message: "hi", likesCount: 10 },
        { id: 2, message: "hello", status: "chill", likesCount: 13 },
        { id: 3, message: "qwerty123" },
        { id: 4, message: "bloobfish" },
    ],
};

export default state;
