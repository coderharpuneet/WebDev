import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(userName, userImage, userRole, userDescription);
    setAllUsers([
      ...allUsers,
      { userName, userImage, userRole, userDescription },
    ]);
    setUserName("");
    setUserImage("");
    setUserRole("");
    setUserDescription("");
    console.log(allUsers);
  };
  const deleteHandler=(index)=>{
    const copyUsers=[...allUsers]
    copyUsers.splice(index,1)
    setAllUsers(copyUsers)
  }
  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap p-2 justify center"
      >
        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={userImage}
          onChange={(e) => setUserImage(e.target.value)}
          placeholder="Image URL"
        />
        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          placeholder="Enter role"
        />
        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={userDescription}
          onChange={(e) => setUserDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <button className="border-2 px-5 active:scale-95 bg-emerald-700 py-2 rounded m-2 w-[90%]">
          Create User
        </button>
      </form>
      {/* {allUsers.map((user,index)=>{
        return(
          <div key={index}>
            <h1>{user.userName}</h1>
            <img src={user.userImage} alt="" />
            <h1>{user.userRole}</h1>
            <p>{user.userDescription}</p>
          </div>
        )
      })} */}
      <div className="px-4 py-10 gap-4 flex flex-wrap">
        {allUsers.map((elem, index) => {
          return (
            <Card key={index} elem={elem} deleteHandler={deleteHandler}/>
          );
        })}
      </div>
    </div>
  );
};

export default App;
