import axios from "axios";
import { useState } from "react";

export default function CategoryItem({
  name,
  _id,
  category,
  setCategory,
  token,
  isActive,
}) {
  const [formData, setFormData] = useState({
    name: name,
    isActive: isActive,
  });
  const [edit, setEdit] = useState(false);

  async function handleDelete() {
    try {
      let answer = confirm(
        `Are you sure you want to delete the category ${name}?`
      );

      if (!answer) return;

      await axios.delete(`http://localhost:3000/api/category/${_id}`, {
        headers: { "x-auth-token": token },
      });
      let newCatState = category.filter((cat) => cat._id !== _id);

      setCategory(newCatState);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleSave(e) {
    e.preventDefault();

    try {
      let updatedCat = await axios.put(
        `http://localhost:3000/api/category/${_id}`,
        formData
      );
  

      let insertPoint = category.findIndex(cat => cat._id === _id)

      let newCats = [...category]

      newCats.splice(insertPoint, 1, updatedCat.data)

      setCategory(newCats);
      setEdit(false);
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  }

  function handleChange(e) {
    if (e.target.name == "isActive") {
      setFormData({
        ...formData,
        isActive: !formData.isActive,
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  return (
    <li>
      {edit ? (
        <>
          <form onSubmit={handleSave} style={{ flexDirection: "row" }}>
            <input
              onChange={handleChange}
              type="text"
              value={formData.name}
              name="name"
            />
            <input
              onChange={handleChange}
              type="checkbox"
              checked={formData.isActive}
              name="isActive"
            />
            <input type="submit" value="Save" />
          </form>
        </>
      ) : (
        <>
          {name}{" "}
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}
