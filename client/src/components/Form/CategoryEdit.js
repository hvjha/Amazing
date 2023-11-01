

import React, { useState } from "react";
import { toast } from "react-hot-toast";

const CategoryEdit = ({
  handleSubmit,
   handleUpdate,
  name,
  setName,
  setSubCategory,
  subCategory,
}) => {
  const [subCatName, setSubCatName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (subCatName === "") {
      toast.error("Enter sub-category name");
      return;
    }
    setSubCategory([...subCategory, subCatName]);
    setSubCatName("");
  };

  const handleChange = (e, index) => {
    const updatedSubCategory = [...subCategory];
    updatedSubCategory[index] = e.target.value;
    setSubCategory(updatedSubCategory);
  };
  const deleteSubCat = (e, index) => {
    e.preventDefault();
    const newSubCategory = [...subCategory];
    newSubCategory.splice(index, 1);
    setSubCategory(newSubCategory);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sub-Categories</label>
          {subCategory?.map((sub, index) => (
            <div className="input-group mb-2" key={index}>
              <input
                type="text"
                className="form-control"
                value={sub}
                onChange={(e) => handleChange(e, index)}
              />
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={(e) => deleteSubCat(e, index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label">New Sub-Category</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new sub-category"
              value={subCatName}
              onChange={(e) => setSubCatName(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={(e) => handleAdd(e)}
            >
              Add
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-success" >
          Update Changes
        </button>
      </form>
    </div>
  );
};

export default CategoryEdit;

