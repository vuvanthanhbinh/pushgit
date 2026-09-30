import StudentItem from "./StudentItem";

// Component con: nhận danh sách sinh viên qua props
// Dùng .map() kết hợp arrow function để render danh sách
const StudentList = ({ students }) => {
  if (students.length === 0) {
    return <p className="empty">Chưa có sinh viên nào.</p>;
  }

  return (
    <ul>
      {students.map(({ id, name, score }) => (
        <StudentItem key={id} name={name} score={score} />
      ))}
    </ul>
  );
};

export default StudentList;
