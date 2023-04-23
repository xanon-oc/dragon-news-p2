import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5200/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/categories/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNavbar;
