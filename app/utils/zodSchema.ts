import {z} from "zod"
import {indianCities,indianStates} from "./cities"
const citySchema = z.string().refine(
    (val) => indianCities.some(city => city.name.toLowerCase() === val.toLowerCase()),
    {message: "Invalid City"}
);  
const indianstates = Object.keys(indianStates) as [string,...string[]]
export const userSchema = z.object({
    fullName: z.string().min(5,'The name is too short'),
    email: z.string().email(),
    password: z.string().min(5,"Password is not strong enough"),
    age: z.number(),
    city: citySchema,
    state: z.enum(indianstates)
})