import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import SubcategoryForm from './SubcategoryForm';
import Header from './Header';

    function SubcategoryList({ categoryId }) {
        const [subcategories, setSubcategories] = useState([]);
        const [selectedSubcategory, setSelectedSubcategory] = useState(null);

        useEffect(() => {
            fetchSubcategories();
        }, [categoryId]);

        const fetchSubcategories = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/categories/${categoryId}/subcategories`
                );
                setSubcategories(response.data);
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };
        const handleDelete = async (p_sub_cata_id) => {
            if (window.confirm('Are you sure?')) {
                try {
                    await axios.delete(`http://localhost:5000/subcategories/${p_sub_cata_id}`);
                    fetchSubcategories();
                } catch (error) {
                    console.error('Error deleting subcategory:', error);
                }
            }
        };

        return (
            <>
            <Header/>
            <div className="category-list-container ">
            {/* <div className="main-content"> */}
            <div className="table-wrapper2">

            <h1>Subcategories</h1>
                <SubcategoryForm
                    categoryId={categoryId}
                    fetchSubcategories={fetchSubcategories}
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category_Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subcategories.map((subcategory) => (
                            <tr key={subcategory.p_sub_cata_id}>
                                <td>{subcategory.p_sub_cata_id}</td>
                                <td>{subcategory.p_sub_cata_name}</td>
                                <td>{subcategory.p_sub_cata_description}</td>
                                <td>{subcategory.productcategory_id}</td>
                                <td>
                                    <button
                                        onClick={() =>{console.log("selected subcategory::",subcategory);
                                             setSelectedSubcategory(subcategory)}}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(subcategory.p_sub_cata_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedSubcategory && (
                    <SubcategoryForm
                        categoryId={categoryId}
                        subcategory={selectedSubcategory}
                        fetchSubcategories={fetchSubcategories}
                        setSelectedSubcategory={setSelectedSubcategory}
                    />
                )}
            </div>
        </div>
        {/* </div> */}
        </>
        );
    }

    export default SubcategoryList;