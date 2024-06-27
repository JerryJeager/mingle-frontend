export type User = {
    id: string
    email: string
    username: string
    auth_type: "normal" | "google"
    picture: string
}