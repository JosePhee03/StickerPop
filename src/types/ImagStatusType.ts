export type imageStatus =
  | 'UPLOAD'
  | 'EDITED'
  | 'DROP'
  | 'DOWNLOAD'
  | 'RESET'


export interface imageContext {
  imageState: null | imageStatus;
  originalImage: null | string;
  editedImage: null | string;
  fileImage: null | fileType;
  ObjectOfEditedImage: null | object
}

export interface fileType {
  path: string; 
  name: string; 
  lastModified: number; 
  webkitRelativePath: string; 
  size: number; 
  type: string 
}