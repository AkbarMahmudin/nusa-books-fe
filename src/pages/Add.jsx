import Layout from "../layouts/Main";
import FormBook from "../components/form/FormBook";
import { useState } from "react";
import { addBook } from "../services/books/add-book";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
    isbn: "",
    title: "",
    subtitle: "",
    author: "",
    publisher: "",
    published: "",
    website: "",
    pages: 0,
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.pages = parseInt(formData.pages);
    const bookCreated = await addBook(formData);

    if (!bookCreated.ok) {
      return alert(bookCreated.message)
    }

    alert(bookCreated.message);

    navigate("/");
  };

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <FormBook
          title="Add Book"
          buttonText="Add"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
};

export default Add;
