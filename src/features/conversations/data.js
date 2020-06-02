import faker from 'faker'
import shortid from 'shortid'

const data = [
    {
        id: shortid.generate(),
        users: [
            {
                id: 1,
                fullName: faker.name.findName()
            },
            {
                id: 0,
                fullName: "me"
            }
        ],
        messages: [
            {
                id: shortid.generate(),
                from: 1,
                content: "Hey I'm here!",
                timestamp: Date.now(),
            },
            {
                id: shortid.generate(),
                from: 0,
                content: "Hey I'm here too!",
                timestamp: Date.now(),
            },
            {
                id: shortid.generate(),
                from: 1,
                content: "Hey I'm here too too!",
                timestamp: Date.now(),
            }
        ]
    },
    {
        id: shortid.generate(),
        users: [
            {
                id: 2,
                fullName: faker.name.findName()
            },
            {
                id: 0,
                fullName: "me"
            }
        ],
        messages: []
    }
]

export default data