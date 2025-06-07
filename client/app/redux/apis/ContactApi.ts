// src/store/contactApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Contact {
    _id?: string;
    name: string;
    email: string;
    subject: string;
    mobile?: string;
    message: string;
    response?: boolean;
    reply?: {
        message?: string;
        date?: string;
    };
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateContactRequest {
    name: string;
    email: string;
    subject: string;
    mobile?: string;
    message: string;
}

export interface CreateContactResponse {
    message: string;
    result: Contact;
}

export const contactApi = createApi({
    reducerPath: "contactApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/contact`,
    }),
    tagTypes: ["Contact"],
    endpoints: (builder) => ({
        // Fetch all contacts (if you have such an endpoint, otherwise skip)
        getContacts: builder.query<Contact[], void>({
            query: () => ({
                url: "/get-contact",  // Change this to your actual GET endpoint if exists
                method: "GET",
            }),
            providesTags: ["Contact"],
        }),

        // Create a contact (matches your POST /create-contact endpoint)
        createContact: builder.mutation<CreateContactResponse, CreateContactRequest>({
            query: (newContact) => ({
                url: "/create-contact", // Your POST endpoint
                method: "POST",
                body: newContact,
            }),
            invalidatesTags: ["Contact"],
        }),
    }),
});

export const { useGetContactsQuery, useCreateContactMutation } = contactApi;
