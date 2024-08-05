"use server"
import { api, user } from "../utils/api";
import { xmlToJson } from "../utils/xml-to-json";
import { signIn, signOut } from "../auth/providers";
import {cleanNS2Obj} from '../utils/clean-ns2-objs'

export async function logOut (){
  await signOut()
}