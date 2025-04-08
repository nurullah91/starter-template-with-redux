import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  role: "admin" | "user";
  phone: string;
  address: string;
  profilePhoto?: string;
  coverPhoto?: string;
  passwordChangedAt?: Date;
  status: "active" | "blocked";
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TProduct = {
  _id: string;
  title: string;
  description: string;
  photos: { thumbnail: string; cover: string };
  category: string;
  quantity: number;
  price: number;
  stock: number;
  discount: number;
  isDeleted: boolean;
  ratings: number[];
  createdAt: Date;
  updatedAt: Date;
};

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};
