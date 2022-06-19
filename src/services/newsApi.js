import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "crypto-news-live3.p.rapidapi.com";

const newsApiHeaders = {
    // 'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
    // 'x-rapidapi-key': 'b9b8846e92msh0461be01ffaba9ep173c56jsn1fa9129f8007',
    'X-RapidAPI-Key': 'b9b8846e92msh0461be01ffaba9ep173c56jsn1fa9129f8007',
    'X-RapidAPI-Host': 'crypto-news15.p.rapidapi.com'
}

const createRequest = (url) => ({
    url,
    headers: newsApiHeaders,
})

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://crypto-news15.p.rapidapi.com'}),
    endpoints: (builder)=> ({
        getNews: builder.query({
            query: ( count) => createRequest('/news')
        })
    })
});

export const{
    useGetNewsQuery,
}=newsApi;