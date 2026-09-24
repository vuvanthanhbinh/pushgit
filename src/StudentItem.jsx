// Component cháu: nhận { name, score } qua props (Destructuring Assignment)
// Dùng arrow function + template literals
const StudentItem = ({ name, score }) => {
  const passed = score >= 5;
  const status = passed ? "Đạt" : "Trượt";
  const className = passed ? "pass" : "fail";

  return (
    <li className={className}>
      {`Họ tên: ${name} - Điểm: ${score} (${status})`}
    </li>
  );
};

export default StudentItem;
