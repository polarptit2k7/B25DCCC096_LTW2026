const StudentItem = ({ student, onDelete }) => {
  const { id, name, score, class: className } = student;

  const rank = score >= 8 ? 'Giỏi' : score >= 5 ? 'Khá/TB' : 'Trượt';

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{score}</td>
      <td>{className}</td>
      <td>{`${rank} (${score}/10)`}</td>
      <td>
        <button className="btn-delete" onClick={() => onDelete(id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;