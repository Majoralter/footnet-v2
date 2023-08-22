import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { writable } from "svelte/store"
import { auth } from "$lib/firebase/firebase"
import { uploadString, getDownloadURL } from "firebase/storage"


export const authStore = writable({
    user: null,
    loading: true,
    data: {}
})

export const  authHandlers = {
    signUp: async (email,password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    login: async (email,password) =>{
        await signInWithEmailAndPassword(auth, email, password)
    },
    logout: async () =>{
        await signOut(auth)
    }
}

export const storageHandlers = {
    upload: async (ref, image) =>{
        await uploadString(ref, image, 'data_url')
    }
}