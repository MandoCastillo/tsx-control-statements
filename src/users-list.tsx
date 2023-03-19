interface IUser {
    id: number;
    name: string;
    email: string;
}

interface Props {
    users: IUser[];
}

export const UsersList = ({users}: Props) => {
    return (
        <>
            <p>UsersList</p>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </>
    );
};
