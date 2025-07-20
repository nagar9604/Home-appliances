import React, { useState, useEffect } from "react";
import axios from "axios";
import SubcategoryForm from "./SubcategoryForm";
import "./Style/CategoryList.css"
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
function SubcategoryList({ categoryId }) {
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    fetchSubcategories();
  }, [categoryId]);

  const fetchSubcategories = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/categories/${categoryId}/subcategories`
      );
      setSubcategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleDelete = async (subcategoryId) => {
    if (window.confirm("Are you sure you want to delete this subcategory?")) {
      try {
        await axios.delete(`${API_BASE_URL}/subcategories/${subcategoryId}`);
        fetchSubcategories(); // Refresh list
      } catch (error) {
        console.error("Error deleting subcategory:", error);
      }
    }
  };

  return (
    <div className="subcategory-list">
      <h2>Subcategories</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((subcategory) => (
            <tr key={subcategory.p_sub_cata_id}>
              <td>{subcategory.p_sub_cata_id}</td>
              <td>{subcategory.p_sub_cata_name}</td>
              <td>{subcategory.p_sub_cata_description}</td>
              <td>
                <button onClick={() => setSelectedSubcategory(subcategory)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(subcategory.p_sub_cata_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show subcategory form when editing */}
      {selectedSubcategory && (
        <SubcategoryForm
          categoryId={categoryId}
          subcategory={selectedSubcategory}
          fetchSubcategories={fetchSubcategories}
          setSelectedSubcategory={setSelectedSubcategory} // Clears form on save/cancel
        />
      )}
    </div>
  );
}

export default SubcategoryList;
