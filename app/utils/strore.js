import { cookies } from "next/headers";

export const cookieStore = cookies();

export const token = cookieStore.get('bikeShared')?.value;
