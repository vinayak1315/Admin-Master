import React, { useEffect, useState } from "react";
import "./styles.css";

import { NavLink } from "react-router-dom";
import { allUsers, singleUser } from "./actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
const Task = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);
  const { loading, user } = useSelector((state) => state.user);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    dispatch(allUsers());
    dispatch(singleUser(userData));
    
  }, [dispatch, userData]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="App">
            {user ? (
              <>
                <div className="box">
                  <h2>
                    Name: {user.first_name} {user.last_name}
                  </h2>
                  <div>
                    <img
                      src={user && user.avatar ? user.avatar : null}
                      width="150"
                      height="150"
                      className="mb-2"
                      alt="User"
                    />
                  </div>
                  <div>Email: {user.email}</div>
                  <div>First Name: {user.first_name}</div>
                  <div>Last Name: {user.last_name}</div>
                </div>
              </>
            ) : (
              <>
                <div className="box">
                  <h2>Name</h2>
                  <div>
                    <img
                      src={user ? user.avatar : null}
                      width="150"
                      height="150"
                      className="mb-2"
                      alt="User"
                    />
                  </div>
                  <div>Email: </div>
                  <div>First Name: </div>
                  <div>Last Name: </div>
                </div>
              </>
            )}
            <div className="d-flex">
              {users &&
                users.map((user) => (
                  <div>
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/"
                      activeClassName="active"
                    >
                      <div
                        className="buttons"
                        onClick={() => setUserData(user.id)}
                      >
                        {user.id}
                      </div>
                    </NavLink>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Task;
