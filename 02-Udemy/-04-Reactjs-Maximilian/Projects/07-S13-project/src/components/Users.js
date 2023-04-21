import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // state -> this.state -> must be obj -> setState to update
  constructor() {
    super();
    this.state = {
      showUsers: false,
      more: "Test",
    };
  }

  componentDidUpdate() {
    // try / catch could be used -> if we want to handle error in this cmp not the parent
    if (this.props.users.length === 0) {
      throw new Error("No users");
    }
  }
  // you have to bind this when using
  toggleUsersHandler() {
    // merge with old state not override it
    this.setState((currState) => {
      return { showUsers: !currState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
