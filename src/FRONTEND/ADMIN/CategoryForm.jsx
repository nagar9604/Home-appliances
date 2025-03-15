import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryForm({ category, fetchCategories, setSelectedCategory }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (category) {
      setName(category.productcategory_name);
      setDescription(category.productcategory_description);
    } else {
      setName("");
      setDescription("");
    }
  }, [category]);

  const validateName = () => {
    if (!name.trim()) {
      setNameError("Name is required");
      return false;
    }

    const hasNumbers = /\d/.test(name);
    const isEmailLike = /@/.test(name);

    if (hasNumbers || isEmailLike) {
      setNameError("Name cannot contain numbers or email patterns");
      return false;
    }

    setNameError(""); // Clear any previous error
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName()) {
      return;
    }

    try {
      if (category) {
        await axios.put(
          `http://localhost:5000/categories/${category.productcategory_id}`,
          {
            name,
            description,
          }
        );
      } else {
        await axios.post("http://localhost:5000/categories", {
          name,
          description,
        });
      }
      fetchCategories();
      setName("");
      setDescription("");
      if (setSelectedCategory) {
        setSelectedCategory(null);
      }
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  return (
    <form className="category-form" onSubmit={handleSubmit}>
      <h2>{category ? "Edit Category" : "Add Category"}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateName();
          }}
          required
        />
        {nameError && <p className="error-message">{nameError}</p>}
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            
          }}
          required

        />
      </div>
      <button type="submit">Save</button>
      {setSelectedCategory && category && (
        <button type="button" onClick={() => setSelectedCategory(null)}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default CategoryForm;
