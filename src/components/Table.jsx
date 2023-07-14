import { Link } from "react-router-dom";

const Table = ({ rows = [], onDelete }) => {
  const createRows = () => {
    if (rows.length === 0) {
      return (
        <tr>
          <td colSpan="8" className="text-center">
            No data
          </td>
        </tr>
      );
    }

    return rows.map((row, index) => (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{row.isbn}</td>
        <td>{row.title}</td>
        <td>{row.author}</td>
        <td>{new Date(row.published).toDateString()}</td>
        <td>{row.publisher}</td>
        <td>{row.pages}</td>
        <td>
          <div className="btn-group">
            <Link to={`edit/${row.id}`} className="btn btn-outline btn-warning">
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-outline btn-error"
              data-id={row.id}
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table table-zebra">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Published</th>
          <th>Publisher</th>
          <th>Pages</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {createRows()}
      </tbody>
    </table>
  );
};

export default Table;
