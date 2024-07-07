import { React } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { Userid } = useParams();
  return (
    <>
      <div className="text-center p-10 text-3xl">User : {Userid}</div>
    </>
  );
}
export default User;
