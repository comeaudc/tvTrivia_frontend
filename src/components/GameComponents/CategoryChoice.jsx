import style from "./Game.module.css";

export default function CategoryChoice({ category, setGenre }) {
  let categories = category.map((cat) => {
    return (
      <option key={cat._id} value={cat._id}>
        {cat.name}
      </option>
    );
  });

  function handleChange(e) {
    if (e.target.value) setGenre(e.target.value);
  }

  return (
    <div className={style.container}>
      <label className={style.choice}>
        {" "}
        <h2>Choose a category:</h2>
        <select name="category" onChange={handleChange}>
          <option>Select a category</option>
          {categories}
        </select>
      </label>
    </div>
  );
}
