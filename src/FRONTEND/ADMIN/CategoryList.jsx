import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryForm from "./CategoryForm";
import SubcategoryList from "./SubcategoryList";
import Header from "./Header";
import "./Style/CategoryList.css";

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showSubcategories, setShowSubcategories] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/categories");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleDelete = async (productcategory_id) => {
        if (window.confirm("Are you sure? you want to delete category")) {
            try {
                await axios.delete(`http://localhost:5000/categories/${productcategory_id}`);
                fetchCategories();
            } catch (error) {
                console.error("Error deleting category:", error);
            }
        }
    };

    return (
        <>
            <Header />
            <div className="category-list-container ">
                <div className="main-content">
                    <div className="table-wrapper2">
                        <h1 style={{ fontWeight: "bolder", fontFamily: "serif" }}>
                            Categories
                        </h1>
                        <CategoryForm fetchCategories={fetchCategories} category={null} setSelectedCategory={setSelectedCategory} />
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
                                {categories.map((category) => (
                                    <tr key={category.productcategory_id}>
                                        <td>{category.productcategory_id}</td>
                                        <td>{category.productcategory_name}</td>
                                        <td>{category.productcategory_description}</td>
                                        <td>
                                            <button onClick={() => {
                                                setSelectedCategory(category);
                                                setShowSubcategories(true);
                                            }}>
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(category.productcategory_id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {selectedCategory && (
                            <CategoryForm
                                category={selectedCategory}
                                fetchCategories={fetchCategories}
                                setSelectedCategory={() => {
                                    setSelectedCategory(null);
                                    setShowSubcategories(false);
                                }}
                            />
                        )}
                        {showSubcategories && selectedCategory && (
                            <SubcategoryList categoryId={selectedCategory.productcategory_id} />
                        )}
                        {showSubcategories && (
                            <button onClick={() => {
                                setShowSubcategories(false);
                                setSelectedCategory(null);
                            }}>
                                Hide Subcategories
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryList;