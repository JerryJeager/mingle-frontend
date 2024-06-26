"use server"

import { cookies } from "next/headers"


export const storeCookie = async (name: string, value: string) => {
    cookies().set(name, value)
}

export const getCookie = async (name: string) => {
    return cookies().get(name)
}