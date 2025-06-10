# Attachment/File Management Endpoints

## GET /api/attachments/
- List all attachments
- Response: `[AttachmentResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchAttachments = async (params) => {
  const response = await axios.get('/api/attachments/', { params });
  return response.data;
};

// React Query hook
export const useAttachments = (filters = {}) => {
  return useQuery(['attachments', filters], () => fetchAttachments(filters));
};
```

## POST /api/attachments/
- Upload a new attachment
- Request: `AttachmentRequest`
- Response: `AttachmentResponse`

**React Query Implementation:**
```typescript
// Axios API call with upload progress
const uploadAttachment = async (data: FormData, onProgress?: (progress: number) => void) => {
  const response = await axios.post('/api/attachments/', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      if (onProgress) {
        onProgress(percentCompleted);
      }
    },
  });
  return response.data;
};

// React Query hook
export const useUploadAttachment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    ({ formData, onProgress }: { formData: FormData; onProgress?: (progress: number) => void }) => 
      uploadAttachment(formData, onProgress),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['attachments']);
      },
    }
  );
};

// Usage example
const uploadFile = (file: File, description?: string, relatedEntityId?: number) => {
  const formData = new FormData();
  formData.append('file', file);
  
  if (description) {
    formData.append('description', description);
  }
  
  if (relatedEntityId) {
    formData.append('related_entity_id', String(relatedEntityId));
  }
  
  return mutate({ 
    formData, 
    onProgress: (progress) => console.log(`Upload progress: ${progress}%`) 
  });
};
```

## GET /api/attachments/{id}/
- Get attachment details
- Response: `AttachmentResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchAttachmentById = async (id: number) => {
  const response = await axios.get(`/api/attachments/${id}/`);
  return response.data;
};

// React Query hook
export const useAttachment = (id: number) => {
  return useQuery(['attachments', id], () => fetchAttachmentById(id), {
    enabled: !!id,
  });
};
```

## DELETE /api/attachments/{id}/
- Delete an attachment (admin/staff only)
- Response: `BaseResponse`

**React Query Implementation:**
```typescript
// Axios API call
const deleteAttachment = async (id: number) => {
  const response = await axios.delete(`/api/attachments/${id}/`);
  return response.data;
};

// React Query hook
export const useDeleteAttachment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(deleteAttachment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['attachments']);
    },
  });
};
```

## File Preview Utilities

```typescript
// Get file type from url/path
export const getFileType = (filePath: string): 'image' | 'pdf' | 'document' | 'other' => {
  const extension = filePath.split('.').pop()?.toLowerCase();
  
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension as string)) {
    return 'image';
  } else if (extension === 'pdf') {
    return 'pdf';
  } else if (['doc', 'docx', 'txt', 'xls', 'xlsx', 'ppt', 'pptx'].includes(extension as string)) {
    return 'document';
  } else {
    return 'other';
  }
};

// Preview component selector
export const FilePreview = ({ file }: { file: string }) => {
  const fileType = getFileType(file);
  
  switch (fileType) {
    case 'image':
      return <ImagePreview src={file} />;
    case 'pdf':
      return <PdfPreview src={file} />;
    case 'document':
    case 'other':
    default:
      return <DownloadLink href={file} />;
  }
};
``` 