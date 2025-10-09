import style from "../AuthForms/Forms.module.css";

export default function QuestionForm() {
  return (
    <div className={style.forms}>
      <h2>Question Form</h2>
      <form>
        <label>
          Question:
          <input type="text" name="questionText" placeholder="Question..." />
        </label>
        <label>
          Category:
          <select name="categoryId">
            {/* OPTIONS */}
          </select>
        </label>
        <label>
          Answer Choices:
          <input type="text" name="choice" placeholder="Choice..." />
        </label>
        <label>
          <input type="submit" name="Save Question" />
        </label>
      </form>
    </div>
  );
}

// questionText: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     correctAnswer: {
//       type: String,
//       required: true,
//     },
//     options: [
//       {
//         type: String,
//       },
//     ],
//     categoryId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Category",
//       required: true,
//       index: true,
//     },
