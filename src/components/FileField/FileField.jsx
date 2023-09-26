import React from 'react';
import { Button, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileField = ({
  handleFileChange,
  selectedFile,
  imageURL,
  setImageURL,
  selectedFileError,
  selectedFileText,
}) => (
    <div>
      <input
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <TextField
          variant="outlined"
          label="Add image URL"
          value={!selectedFile ? imageURL : ''}
          onChange={(e) => setImageURL(e.target.value)}
          error={selectedFileError}
          helperText={selectedFileText}
          sx={{ marginBottom: '60px' }}
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUploadIcon />}
                sx={{ width: `${selectedFile ? '200px' : '150px'}` }}
              >
                {!selectedFile ? 'UpLoad' : 'ReUpLoad'}
              </Button>
            ),
          }}
        />
      </label>
    </div>
);

export default FileField;
