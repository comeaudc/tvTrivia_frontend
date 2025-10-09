import CategoryForm from "../CategoryForm/CategoryForm";
import { useUser } from "../../context/userContext/userContext";
import { useAuth } from "../../context/authContext/authContext";
import { useState } from "react";

import CategoryItem from "../CategoryItem/CategoryItem";

export default function AdminDash() {
  const [create, setCreate] = useState(false);
  const { category, setCategory } = useUser();
  const { cookies } = useAuth();
  return (
    <>
      {create ? (
        <CategoryForm
          setCategory={setCategory}
          category={category}
          token={cookies.token}
          setCreate={setCreate}
        />
      ) : (
        <button
          onClick={() => {
            setCreate(true);
          }}
        >
          Create New Category
        </button>
      )}
      <ul>
        {category &&
          category.map((cat) => {
            return (
              <CategoryItem
                setCategory={setCategory}
                category={category}
                {...cat}
                token={cookies.token}
              />
            );
          })}
      </ul>
    </>
  );
}
