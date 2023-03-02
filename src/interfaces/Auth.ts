export type SignInPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
};

export type CheckOTPPayload = {
  id: string;
  otp: string;
};

export type SetPasswordPayload = {
  password: string;
};

export type RefreshTokenPayload = {
  refresh_token: string | null | undefined;
};

export type GetMeSuccessData = {
  _id: string;
  full_name: string;
  email: string;
  avatar: string;
  address: [];
  phone: string;
  gender: string;
  birthday: string;
  membership_type: string;
  language: number;
  product_favourites: [];
  recent_products: [];
};

export type GetProductSuccessData = {
  _id: string;
  name: string;
  price: number;
  description: string;
  storage_quantity: number;
  images: [];
  properties_type: [];
  categories_type: number;
};

export type GetCartSuccessData = {
  _id: string;
  total: string;
  order_type: number;
  products: [
    {
      product_id: string;
      name: string;
      price: number;
      color: number;
      size: number;
      quantity: number;
      image: string;
      _id: string;
    }
  ];
};
