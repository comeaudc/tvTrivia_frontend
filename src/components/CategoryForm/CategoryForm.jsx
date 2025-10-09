import style from "../AuthForms/Forms.module.css";

export default function CategoryForm() {
  return (
    <>
      <div className={style.forms}>
        <h2>Category Form</h2>
        <form>
          <label>
            Category Name:
            <input type="text" name="name" placeholder="Question..." />
          </label>
          <label>Active:
            <input type="checkbox" name="isActive" />
          </label>
          <label>
            <input type="submit" name="Save Question" />
          </label>
        </form>
      </div>
    </>
  );
}
