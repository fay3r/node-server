export interface Book extends NewBook {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewBook {
  title: string;
  author: string;
}
