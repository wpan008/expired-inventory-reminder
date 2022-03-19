interface Item {
    id: string
    text: string;
    expiry: Date;
    comment: string;
}

type AddTodo = (id: string, text: string, expiry: Date, comment: string) => void;