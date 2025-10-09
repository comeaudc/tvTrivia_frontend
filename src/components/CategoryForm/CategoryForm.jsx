import { useState } from "react";
import style from "../AuthForms/Forms.module.css";
import axios from "axios";

export default function CategoryForm({
  setCategory,
  category,
  token,
  setCreate,
}) {
  
  const [formData, setFormData] = useState({
    name: "",
    isActive: false,
  });

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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post(
        "http://localhost:3000/api/category",
        formData,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      setCategory([...category, res.data.newCategory]);

      setFormData({
        name: "",
        isActive: false,
      });
      // console.log(res.data.newCategory);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <div className={style.forms}>
        <h2>Category Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Category Name:
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              placeholder="Question..."
            />
          </label>
          <label>
            Active:
            <input
              onChange={handleChange}
              checked={formData.isActive}
              type="checkbox"
              name="isActive"
            />
          </label>
          <label>
            <input type="submit" name="Save Question" />
          </label>
        </form>
        <button
          onClick={() => {
            setCreate(false);
          }}
        >
          Cancel Create
        </button>
      </div>
    </>
  );
}
