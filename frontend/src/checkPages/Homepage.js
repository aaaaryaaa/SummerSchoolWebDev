import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({ user }) => {
  const navigate = useNavigate();

  // If user is not defined, navigate to login page
  if (!user) {
    navigate("/login");
    return null; // Render nothing while redirecting
  }

  const userDomains = user.domains || []; // Ensure domains is an array

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <div>
        {Object.keys(userDomains).map((domain) => (
          <button
            key={domain}
            onClick={() =>
              navigate(
                userDomains[domain] ? `/${domain.toLowerCase()}` : "/unselected"
              )
            }
          >
            {domain}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
