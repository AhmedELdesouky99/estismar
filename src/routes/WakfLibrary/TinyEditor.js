import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const TinyEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    // Replace 'YOUR_IMAGE_UPLOAD_URL' with the actual endpoint to upload images
    axios.post('YOUR_IMAGE_UPLOAD_URL', formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        const quill = this.reactQuillRef?.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);
      })
      .catch((error) => {
        console.log('Image upload error:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <ReactQuill
        ref={(el) => (this.reactQuillRef = el)}
        value={editorHtml}
        onChange={setEditorHtml}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
          clipboard: {
            matchVisual: false,
          },
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'list',
          'bullet',
          'link',
          'image',
        ]}
        placeholder="Write something..."
      />
    </div>
  );
};

export default TinyEditor;