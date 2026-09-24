import { useState } from "react";
import StudentList from "./StudentList";

// Component cha: quản lý state danh sách sinh viên (students)
// và giá trị nhập từ form (newName, newScore)
const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyễn Văn A", score: 8.5 },
    { id: 2, name: "Trần Thị B", score: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newScore, setNewScore] = useState("");

  // Arrow function xử lý thêm sinh viên mới
  const handleAddStudent = () => {
    const name = newName.trim();
    const score = parseFloat(newScore);
    if (!name || isNaN(score)) return;

    const newStudent = { id: Date.now(), name, score };
    setStudents([...students, newStudent]); // dùng spread (ES6)
    setNewName("");
    setNewScore("");
  };

  return (
    <div className="container">
      <header>
        <h1>Xin chào!!!</h1>
      </header>

      <h2>Quản lý điểm sinh viên</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddStudent();
        }}
      >
        <input
          type="text"
          placeholder="Tên sinh viên"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          step="0.1"
          placeholder="Điểm số"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        />
        <button type="submit">Thêm sinh viên</button>
      </form>

      <StudentList students={students} />
    </div>
  );
};

export default App;
