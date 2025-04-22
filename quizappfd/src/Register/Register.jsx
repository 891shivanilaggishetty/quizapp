import React, { useState } from "react";
import "./Register.css";
import InputField from "../utils/commoncomponents/InputField";

//  x =1
// x =2

//  formData = {....}
// setFormData({ ...formData, [name]: value });

const RegistrationModule = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeName: "",
    collegeId: "",
    profilePic: null,
    collegeIdCard: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      const sizeKB = file.size / 1024;
      if (name === "profilePic" && (sizeKB < 50 || sizeKB > 250)) {
        setErrors({
          ...errors,
          profilePic: "Profile picture must be 50KB - 250KB",
        });
      } else if (name === "collegeIdCard" && (sizeKB < 100 || sizeKB > 500)) {
        setErrors({
          ...errors,
          collegeIdCard: "College ID card must be 100KB - 500KB",
        });
      } else {
        setErrors({ ...errors, [name]: "" });
        setFormData({ ...formData, [name]: file });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    alert("Form Submitted Successfully!");
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <InputField
          label="Full Name:"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required={true}
        />

        <InputField
          label="Email Address:"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />

        <InputField
          label="Phone Number:"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required={true}
        />

        <InputField
          label="College Name:"
          type="text"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          required={true}
        />

        <InputField
          label="College ID Number:"
          type="text"
          name="collegeId"
          value={formData.collegeId}
          onChange={handleChange}
          required={true}
        />

        <label>
          Upload Profile Picture (50KB - 250KB):
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {errors.profilePic && (
            <span className="error">{errors.profilePic}</span>
          )}
        </label>

        <label>
          Upload College ID Card (100KB - 500KB):
          <input
            type="file"
            name="collegeIdCard"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {errors.collegeIdCard && (
            <span className="error">{errors.collegeIdCard}</span>
          )}
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationModule;
