import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

const initialStudents = [
  { id: 1, name: 'Nguyễn Văn An', score: 9, class: 'D25CQCC01' },
  { id: 2, name: 'Trần Thị Bình', score: 7.5, class: 'D25CQCC01' },
  { id: 3, name: 'Lê Hoàng Cường', score: 4, class: 'D25CQCC02' },
  { id: 4, name: 'Phạm Minh Đức', score: 8.5, class: 'D25CQCC02' },
];

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('all');

  const handleAdd = ({ name, score, className }) => {
    const newStudent = { id: Date.now(), name, score, class: className };
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const displayedStudents = students.filter(({ score }) => {
    if (filter === 'good') return score >= 8;
    if (filter === 'fail') return score < 5;
    return true;
  });

  const total = students.length;
  const average =
    total > 0
      ? (students.reduce((sum, { score }) => sum + score, 0) / total).toFixed(2)
      : 0;

  return (
    <div className="container">
      <h1>Quản lý Điểm Sinh viên</h1>

      <StudentForm onAdd={handleAdd} />

      <div className="filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          Tất cả
        </button>
        <button className={filter === 'good' ? 'active' : ''} onClick={() => setFilter('good')}>
          Giỏi (≥ 8)
        </button>
        <button className={filter === 'fail' ? 'active' : ''} onClick={() => setFilter('fail')}>
          Trượt (&lt; 5)
        </button>
      </div>

      <p className="stats">
        {`Tổng số sinh viên: ${total} | Điểm trung bình: ${average}`}
      </p>

      <StudentList students={displayedStudents} onDelete={handleDelete} />
    </div>
  );
};

export default App;