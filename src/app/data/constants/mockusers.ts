import { User } from "@/core/model/User";

const mockUsers: User[] = [
    {
        id: 1,
        email: "john.doe@example.com",
        login: "John Doe",
        password: "password123"
    },
    {
        id: 2,
        email: "jane.smith@example.com",
        login: "Jane Smith",
        password: "supersecret"
    },
    {
        id: 3,
        email: "alice.johnson@example.com",
        login: "Alice Johnson",
        password: "alicepass"
    },
    {
        id: 4,
        email: "bob.brown@example.com",
        login: "Bob Brown",
        password: "brownbob123"
    },
    {
        id: 5,
        email: "charlie.williams@example.com",
        login: "Charlie Williams",
        password: "charlie1234"
    }
];

export default mockUsers;
