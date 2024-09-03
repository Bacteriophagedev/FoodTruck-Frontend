import { useState, useEffect } from "react";
import "./AddMenu.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sider from "../AddMenu-Sider/Sider";
import SiderTopBar from "../AddMenu-Sider/Sider-Top-Bar";

const AddMenu = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [droppedImageName, setDroppedImageName] = useState("");
  const [nameofDish, setNameofDish] = useState("");
  const [category, setCategory] = useState("");
  const [priceofDish, setPriceofDish] = useState("");
  const [description, setDescription] = useState("");
  const [imageofDish, setImageofDish] = useState<File | null>(null);
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/protected-routes/restaurant",
          {
            withCredentials: true,
          }
        );

        if (response.status === 200 && response.data.restaurant) {
          setUserId(response.data.restaurant.id);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileInputChange(e);
  };

  const handleFileInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) => {
    const fileInput = (e.target as HTMLInputElement).files?.[0];
    if (fileInput) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (allowedTypes.includes(fileInput.type)) {
        setDroppedImageName(fileInput.name);
        setImageofDish(fileInput);
      } else {
        console.error("Invalid file type. Only JPEG and PNG are allowed.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nameofDish", nameofDish);
    formData.append("priceofDish", priceofDish);
    formData.append("category", category);
    formData.append("description", description);
    if (imageofDish) {
      formData.append("imageofDish", imageofDish);
    }
    formData.append("restaurantId", userId);

    try {
      const res = await axios.post(
        "http://localhost:4000/restaurant/addMenu",
        formData,
        { withCredentials: true }
      );

      if (res.status === 200 && res.data.message) {
        navigate("/"); // Navigate to home or another page
        console.log("Menu added successfully!");
        setNameofDish("");
        setPriceofDish("");
        setCategory("");
        setDescription("");
        setDroppedImageName("");
      }
    } catch (error) {
      console.error("Error adding Menu:", error);
      alert("There was an issue adding the menu. Please try again.");
    }
  };

  return (
    <>
      <SiderTopBar />
      <Sider />
      <form onSubmit={handleSubmit}>
        <div className={`menu ${isDragging ? "dragging" : ""}`}>
          <div className="flex">
            <img src="images/add.png" alt="add icon" className="add-icon" />
            <span className="addtext">Add Menu</span>
          </div>
          <div className="form-field">
            <label>Name of Dish</label>
            <input
              type="text"
              placeholder=""
              className="addMe"
              value={nameofDish}
              onChange={(e) => setNameofDish(e.currentTarget.value)}
            />
            <label>Price of Dish</label>
            <input
              type="text"
              placeholder=""
              id="price"
              className="addMe"
              value={priceofDish}
              onChange={(e) => setPriceofDish(e.currentTarget.value)}
            />
            <label>Category</label>
            <input
              type="text"
              placeholder=""
              id="category"
              className="addMe"
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <label>Description</label>
            <input
              type="text"
              placeholder=""
              id="description"
              className="addMe"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            />

            <label>Picture Upload</label>
            <div
              className="file-drop-container"
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
            >
              {droppedImageName ? (
                <p>File Name: {droppedImageName}</p>
              ) : (
                <>
                  <img
                    src="images/Group 2.png"
                    alt="upload-image"
                    className="jpeg-icon"
                  />
                  <p>
                    {isDragging
                      ? "Drop your files here"
                      : "Drop your files here or "}
                    <label className="drag">
                      Choose file
                      <input
                        type="file"
                        className="file-input"
                        id="file-input"
                        onChange={handleFileInputChange}
                        style={{ display: "none" }}
                      />
                    </label>
                  </p>
                </>
              )}
            </div>
            <div className="btn">
              <button className="button">Add Menu</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddMenu;
