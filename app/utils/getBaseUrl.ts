export const getBaseUrl = (): string => { 
    return process.env.NEXT_PUBLIC_ENVIRONMENT == "development" ? "http://localhost:8080/api/v1" : "https://mingle-v1.onrender.com/api/v1"
}

export const getGoogleAuthUrl = (): string | undefined => { 
    return process.env.NEXT_PUBLIC_ENVIRONMENT == "development" ? process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL_LOCAL  : process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL
}