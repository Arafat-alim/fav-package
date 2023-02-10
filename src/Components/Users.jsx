import { useParams } from "react-router-dom";
function Users() {
  const params = useParams();

  return (
    <div>
      <h1>{params.name}'s page</h1>
    </div>
  );
}

export default Users;
