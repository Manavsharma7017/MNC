import { atom } from "recoil";

export const isauthuser = atom({
    key: "isauthuser",
    default: false
})

export const isauthtype = atom({
    key: "isauthtype",
    default: "user"
})

export const useremail = atom({
    key: "useremail",
    default: ""
})