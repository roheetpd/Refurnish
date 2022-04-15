import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import abcd from "../../Images/abcd.jpg"
const AdminHomeScreen = (props) => {
  const userSignIn = useSelector((store) => store.userSignIn);
  return (
    <div className="Screen" >
      {!userSignIn.response && <Header title="You are not logged in" />}
      {userSignIn.response && (
        <Header title={"Welcome " + userSignIn.response.data.firstName} />
        
      )}
      <img src={abcd} alt=""   height="500px" width="1460px" />
    </div>
  );
};

export default AdminHomeScreen;
