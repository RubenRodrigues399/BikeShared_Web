"use server"
import { signOut } from "../auth/providers";
export async function logOut (){
  await signOut()
}