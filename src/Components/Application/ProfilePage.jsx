import React, { useContext } from "react";
import Context from "../../Context/Context";
import { auth } from "../../firebase";
const ProfilePage = () => {
  const { user, theme, toggleTheme, constrat } = useContext(Context);
  const { photoURL, displayName, email } = user;
  return (
    <div className={`container text-center mt-5 bg-${theme} text-${constrat}`}>
      <div className="d-flex border flex justify-content-around align-items-center text-center px-3 py-4">
        <div
          style={{
            background: `url(${
              photoURL ||
              "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
            })  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px",
          }}
          className="border "
        ></div>
        <div>
          <h2>{displayName}</h2>
          <h3>{email}</h3>
        </div>
      </div>
      <button
        onClick={() => {
          auth.signOut();
        }}
        className="w-100 py-3 btn btn-danger mt-4 text-white"
      >
        Sign out
      </button>
    </div>
  );
};

export default ProfilePage;
