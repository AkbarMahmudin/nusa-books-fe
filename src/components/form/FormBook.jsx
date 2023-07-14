import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

const FormBook = ({
  title = "",
  buttonText = "",
  book = {
    isbn: "",
    title: "",
    subtitle: "",
    author: "",
    publisher: "",
    published: "",
    website: "",
    pages: 0,
    description: "",
  },
  onSubmit,
  onChange,
}) => {
  return (
    <div className="card bordered shadow-2xl md:w-4/5 w-full">
      <div className="card-body">
        <h2 className="card-title pb-6">{title}</h2>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="isbn"
            label="ISBN"
            value={book.isbn}
            onChange={onChange}
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="text"
              placeholder="title"
              label="Title"
              value={book.title}
              onChange={onChange}
            />
            <Input
              type="text"
              placeholder="subtitle"
              label="Subtitle"
              value={book.subtitle}
              onChange={onChange}
            />
          </div>
          <Input
            type="text"
            placeholder="author"
            label="Author"
            value={book.author}
            onChange={onChange}
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="text"
              placeholder="publisher"
              label="Publisher"
              value={book.publisher}
              onChange={onChange}
            />
            <Input
              type="date"
              placeholder="published"
              label="Published"
              value={book.published !== ''
                ? new Date(book.published).toISOString().split("T")[0]
                : ''}
              onChange={onChange}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-3/4">
              <Input
                type="text"
                placeholder="link"
                label="Website"
                value={book.website}
                onChange={onChange}
              />
            </div>
            <div className="w-3/12">
              <Input
                type="number"
                placeholder="pages"
                label="Pages"
                value={book.pages}
                onChange={onChange}
              />
            </div>
          </div>
          <Textarea
            placeholder="description"
            label="Description"
            defaultValue={book.description}
            onChange={onChange}
          />

          <Button text={buttonText} />
          <Link to="/" className="btn btn-ghost w-full my-4">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FormBook;
