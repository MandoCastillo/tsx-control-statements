import {useState} from 'react'

import './App.css'
import {Choose, For, If, Otherwise, When} from "./components";
import {UsersList} from "./users-list";

interface IUser {
    id: number
    name: string
    email: string
}
// list of items to render
const items: IUser[] = [
    {id: 1, name: 'John', email: '[email protected]'},
    {id: 2, name: 'Jane', email: ''},
    {id: 3, name: 'Bob', email: ''},
    {id: 4, name: 'Alice', email: ''},
    {id: 5, name: 'Joe', email: ''},
    {id: 6, name: 'Mary', email: ''},
    {id: 7, name: 'Jack', email: ''},
]

function App() {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<IUser[]>()

    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>Count is: {count}</button>
            <br/>
            <If condition={count % 2 ===0} else="Count is odd">
                Count is even
            </If>
            <br />
            <If condition={count % 3 === 0}>
                <>Count is divisible by 3</>
                <br/>
            </If>
            <Choose>
                <When condition={count < 5}>
                    Count less than 5
                </When>
                <When condition={count === 5}>
                    <>Count is 5</>
                </When>
                <Otherwise>
                    <>Count is greater than 5</>
                </Otherwise>
            </Choose>

            <br/>

            <For of={items} body={(item)=>(
                <div key={item.id}>
                    <>Name: {item.name}</>{' '}
                    <>Email: {item.email}</>
                </div>
            )}/>

            <If condition={users !== undefined}>
                <UsersList users={users}/>
            </If>
        </div>
    )
}

export default App
