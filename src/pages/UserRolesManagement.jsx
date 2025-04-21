import UserForm from "../components/user/UserForm";
import UserList from "../components/user/UserList";


const UserRolesManagement = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Roles & Permissions</h1>
      <UserForm/>
      <UserList />
    </div>
  );
};

export default UserRolesManagement;
