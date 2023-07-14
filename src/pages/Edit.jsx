import Layout from "../layouts/Main";
import FormBook from "../components/form/FormBook";
import getBook from "../services/books/get-book";
import { useLoaderData, useNavigate } from "react-router-dom";
import { updateBook } from "../services/books/update-book";

export const loader = async ({ params }) => {
  const book = await getBook(params.id);

  return {
    book,
  };
};

const Edit = () => {
  const { book } = useLoaderData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    book[name] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    book.ok && delete book.ok;
    book.status && delete book.status;

    book.pages = parseInt(book.pages);
    const bookUpdated = await updateBook(book.id, book);

    if (!bookUpdated.ok) {
      return alert(bookUpdated.message);
    }

    alert("Book updated successfully");
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <FormBook
          title="Edit Book"
          buttonText="Update"
          book={book}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
};

export default Edit;
