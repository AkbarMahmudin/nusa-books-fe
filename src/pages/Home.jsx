import { Link } from "react-router-dom";
import Table from "../components/Table";
import Layout from "../layouts/Main";
import { useEffect, useState } from "react";
import { getBooks } from "../services/books/get-books";
import deleteBook from "../services/books/delete-book";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    const bookId = e.target.dataset.id;
    const isAllowed = window.confirm("Are you sure want to delete this book?");

    if (!isAllowed) {
      return;
    }

    const bookDeleted = await deleteBook(bookId);

    if (!bookDeleted.ok) {
      return alert("Failed to delete book");
    }

    setIsDeleting(!isDeleting);
    alert("Book deleted successfully");
  };

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data.data);
    });
  }, [isDeleting]);

  return (
    <Layout>
      <header className="flex justify-between my-6">
        <h1 className="text-lg font-medium">Books</h1>
        <div className="action">
          <Link to="add" className="btn btn-primary btn-sm">
            Add Book
          </Link>
        </div>
      </header>

      <div className="overflow-x-auto">
        <Table rows={books} onDelete={handleDelete} />
      </div>
    </Layout>
  );
};

export default Home;
