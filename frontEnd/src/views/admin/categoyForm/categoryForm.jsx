import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";

const CategoryForm = () => {
  // const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    image: ""
  });

  const [error, setError] = useState({
    name: "",
    image: ""
  });

  function validate(input) {
    let error = {};
    if (!input.name) error.name = "Insert a Name";
    if (!/^[A-Za-z]+$/.test(input.name)) error.name = "The Name is invalid";
    if (!input.image) error.image = "Insert an Image";

    return error;
  }

  const handlerCategory = (event) => {
    setForm({
      ...form,
      [event.target.name]: [...form[event.target.name], event.target.value]
    });
  };

  const handleForm = (event) => {
    setError(validate({ ...form, [event.target.name]: event.target.value }));
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  //   const submitHandler = async (event) => {
  //     event.preventDefault();
  //     await axios
  //       .post("http://localhost:3001/category", form)
  //       .then((response) => alert("Created Category!"))
  //       .catch((error) => alert(error));
  //   };

  return (
    <div>
      <form>
        <div>
          <button> Create Category!</button>
        </div>
        <div>
          <h3>
            <label>Nombre:</label>
          </h3>

          <input
            type={"text"}
            value={form.name}
            onChange={handleForm}
            name="name"
          />
          {error.name && <span>{error.name}</span>}
        </div>

        <div>
          <h3>
            <label>Imagen:</label>
          </h3>

          <input
            type={"text"}
            value={form.image}
            onChange={handleForm}
            name="image"
          />
          {error.image && <span>{error.image}</span>}
        </div>

        <div>
          <button
            type="submit"
            disabled={error.name || error.image}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
