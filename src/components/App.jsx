import { User } from "./User/User";
import { UsersList } from "./UsersList/UsersList";
import {users} from "data/users"

export const App = () => {
  return (
  <>
    <User user={users[0]}/>
    <UsersList users={users}/>
  </>
  );
};
