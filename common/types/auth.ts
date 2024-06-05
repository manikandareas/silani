// ? REGISTER

export type RegisterDTO = {
   fullName: string;
   email: string;
   dateOfBirth?: Date | string;
   password: string;
};

export type User = {
   id: string;
   fullName: string;
   email: string;
   avatarUrl: string;
   dateOfBirth: Date;
   createdAt: Date;
   updatedAt: Date;
};

export type RegisterResponse = {
   message: string;
   data: User;
};

// ? LOGIN
export type LoginDTO = {
   email: string;
   password: string;
};

export type BackendToken = {
   accessToken: string;
   expiresIn: number;
};

export type LoginResponse = {
   message: string;
   data: User & {
      token: BackendToken;
   };
};

// ? LOGIN GOOGLE
export type GoogleLoginDTO = {
   fullName: string;
   email: string;
   avatarUrl?: string;
   googleId: string;
};

export type GoogleLoginResponse = {
   message: string;
   data: User & {
      token: BackendToken;
      googleId?: string;
   };
};
