// Enums 

// Special type that allows you to store a keyword to represent an integer

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
//                   0       1      2       3       4

// Each keyword is associated with the index of its position, for example: BOOK is equivalent to 0

interface ResourceInterface<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const resource1: ResourceInterface<string> = {
    uid: 1,
    resourceType: ResourceType.BOOK, // this represents 0
    data: "I am data"
}
const resource2: ResourceInterface<string> = {
    uid: 2,
    resourceType: ResourceType.AUTHOR, // this represents 0
    data: "I am data"
}