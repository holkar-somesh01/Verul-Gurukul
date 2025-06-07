import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Admin {
    _id: string;
    name: string;
    email: string;
    mobile?: string;
}

interface RegisterAdminRequest {
    name: string;
    email: string;
    password: string;
    mobile?: string;
}

interface LoginAdminRequest {
    username: string; // can be email or mobile
    password: string;
}

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth`,
        credentials: "include", // important for cookies
    }),
    tagTypes: ["AdminAuth"],
    endpoints: (builder) => ({
        registerAdmin: builder.mutation<{ message: string; data: Admin }, RegisterAdminRequest>({
            query: (adminData) => ({
                url: "/register-admin",
                method: "POST",
                body: adminData,
            }),
            invalidatesTags: ["AdminAuth"],
        }),
        loginAdmin: builder.mutation<Admin, LoginAdminRequest>({
            query: (loginData) => ({
                url: "/login-admin",
                method: "POST",
                body: loginData,
            }),
            transformResponse: (res: { data: Admin }) => {
                localStorage.setItem("admin", JSON.stringify(res.data));
                return res.data;
            },
            invalidatesTags: ["AdminAuth"],
        }),
        logoutAdmin: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: "/logout-admin",
                method: "POST",
            }),
            transformResponse: (res: { message: string }) => {
                localStorage.removeItem("admin");
                return res;
            },
            invalidatesTags: ["AdminAuth"],
        }),
    }),
});

export const {
    useRegisterAdminMutation,
    useLoginAdminMutation,
    useLogoutAdminMutation,
} = adminApi;
