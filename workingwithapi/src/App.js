import React,{useState, useEffect} from 'react';

// class App extends React.Component {
//     state = {
//         users: [
//             {id: 1, first_name: 'Alice'},
//             {id: 2, first_name: 'Bob'},
//         ]
//     }
//
//     componentDidMount() {
//         fetch('https://reqres.in/api/users')
//             .then(res=> res.json())
//             .then(json => {
//                 this.setState({users:json.data});
//             });
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.users.map(u=>
//                 <li key={u.id}>{u.first_name}</li>)}
//             </ul>
//         )
//     }
// }

const App = props => {
    const [users, setUsers ] = useState([]);

    useEffect(()=> {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(json => {
                setUsers(json.data);
            });
    }, []);

    const add = () => {
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({first_name: 'Tom'})
        }).then(res => res.json().then(tom=> {
            setUsers([...users, tom])
        }));
    }

    return (
        <ul>
            {users.map(u => <li key={u.id}>{u.first_name}</li>)}
        </ul>
    );
}

export default App;