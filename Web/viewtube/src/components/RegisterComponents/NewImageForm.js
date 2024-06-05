import React from 'react';
import '../../css/bootstrap.min.css';
import '../../pages/Login.css';



const NewImageForm = ({ setImage, setImagePreview, imagePreview }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setImage(reader.result); // Set the base64 string of the image
      setImagePreview(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="profilePicture">Upload profile picture</label>
      <input 
        type="file" 
        className="form-control" 
        id="profilePicture" 
        onChange={handleImageChange} 
        required
      />
      {imagePreview && 
        <div className='image-preview-container'> 
        <img src={imagePreview} alt="Preview" className="mt-2" />
        </div>}
    </div>
  );
};

export default NewImageForm;