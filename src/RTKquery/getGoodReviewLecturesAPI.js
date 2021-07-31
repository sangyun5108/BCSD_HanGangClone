import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const getGoodReviewLecturesApi = createApi({
    reducerPath:'lectures',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.hangang.in'
    }),
    endpoints:(builder)=>({
        getCultureLectures:builder.query({
            query:()=>`lectures?department=%EA%B5%90%EC%96%91%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C`
        }), // 교양학부
        getHrdLectures:builder.query({
            query:()=>`lectures?department=HRD%ED%95%99%EA%B3%BC&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C`
        }), // HRD학부
        getMachaincLectures:builder.query({
            query:()=>'lectures?department=%EA%B8%B0%EA%B3%84%EA%B3%B5%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }), // 기계공학부
        getMachatronicsLectures:builder.query({
            query:()=>'lectures?department=%EB%A9%94%EC%B9%B4%ED%8A%B8%EB%A1%9C%EB%8B%89%EC%8A%A4%EA%B3%B5%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }), // 메카트로닉스공학부
        getIndustrialManagementLectures:builder.query({
            query:()=>'lectures?department=%EC%82%B0%EC%97%85%EA%B2%BD%EC%98%81%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }), // 산업경영학부
        getEnergyNewMaterialLectures:builder.query({
            query:()=>'lectures?department=%EC%97%90%EB%84%88%EC%A7%80%EC%8B%A0%EC%86%8C%EC%9E%AC%ED%99%94%ED%95%99%EA%B3%B5%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }), //에너지신소재화학공학부
        getComputerLectures:builder.query({
            query:()=>'lectures?department=%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%B5%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }), //컴퓨터공학부
        getFusionLectures:builder.query({
            query:()=>'lectures?classification=&department=%EC%9C%B5%ED%95%A9%ED%95%99%EA%B3%BC&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }), //융합학과
        getElectronicLectures:builder.query({
            query:()=>'lectures?department=%EC%A0%84%EA%B8%B0%E3%86%8D%EC%A0%84%EC%9E%90%E3%86%8D%ED%86%B5%EC%8B%A0%EA%B3%B5%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }), //전기전자통신공학부
        getDesignConstructLectures:builder.query({
            query:()=>'lectures?department=%EB%94%94%EC%9E%90%EC%9D%B8%E3%86%8D%EA%B1%B4%EC%B6%95%EA%B3%B5%ED%95%99%EB%B6%80&limit=5&page=1&sort=%ED%8F%89%EC%A0%90%EC%88%9C'
        }) // 디자인건축공학부
    })
})

export const {
    useGetCultureLecturesQuery,
    useGetHrdLecturesQuery,
    useGetMachaincLecturesQuery,
    useGetMachatronicsLecturesQuery,
    useGetIndustrialManagementLecturesQuery,
    useGetEnergyNewMaterialLecturesQuery,
    useGetComputerLecturesQuery,
    useGetFusionLecturesQuery,
    useGetElectronicLecturesQuery,
    useGetDesignConstructLecturesQuery
} = getGoodReviewLecturesApi;