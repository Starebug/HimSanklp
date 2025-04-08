"use client"
import { useActionState, useMemo, useState } from "react"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from "@conform-to/react"
import { userSchema } from "../utils/zodSchema"
import { parseWithZod } from "@conform-to/zod"
import { onBoardUser } from "@/app/actions"
import { indianStates } from "@/app/utils/cities"
import { indianCities } from "@/app/utils/cities"
import { ComboboxDemo } from "@/components/ui/combobox"
const states = Object.values(indianStates);
interface City {
  id: string;
  name: string;
  state: string
}
export default function OnboardingForm() {
  const [filteredCities, setFilteredCities] = useState<City[]>(indianCities);
  const cityMap = useMemo(() => {
    const map = new Map();
    filteredCities.forEach(city => map.set(city.id, city));
    return map;
  }, [filteredCities]);
  const [selectedState,setSelectedState] = useState("");
  const [selectedCity,setSelectedCity] = useState("");
  const [lastResult, action] = useActionState(onBoardUser,undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: userSchema,
      })
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  })
  const handleCitySelect = (cityId: string) => {
    const city = cityMap.get(cityId);
    if (city) {
      setSelectedCity(city.name);
      setSelectedState(city.state);
      console.log(city.state);
    }
  };
  const handleStateChange = (state:string) => {
      const updatedCity = filteredCities.filter((cityData) => cityData.state===state)
      setFilteredCities(updatedCity) 
      setSelectedState(state)
  }
  return (
    <div className="flex calc(h-[100vh]-110px) ">
      <div className="absolute -z-10 w-screen h-screen inset-0">
        <Image fill className="object-cover" src="/logback.avif" alt="" />
      </div>
      <div className="w-full bg-transparent flex items-center justify-center text-white p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-black text-xl font-bold">P</span>
              </div>
              <span className="font-semibold text-xl">Prestige</span>
            </div>

            <h2 className="text-4xl font-bold mb-2">Sign Up</h2>
            <p className="text-gray-400">Create your account to get started</p>
          </div>

          <form
            action={action}
            onSubmit={form.onSubmit}
            id={form.id}
            className="space-y-5"
          >
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name
              </label>
              <Input
                name={fields.fullName.name}
                key={fields.fullName.key}
                placeholder="John Doe"
                className="w-full bg-zinc-900 border-zinc-800 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="age" className="block text-sm font-medium">
                  Age
                </label>
                <Input
                  name={fields.age.name}
                  key={fields.age.key}
                  min="18"
                  placeholder="25"
                  className="w-full bg-zinc-900 border-zinc-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="block text-sm font-medium">
                  State
                </label>
                <Select value={selectedState} onValueChange={(state)=> handleStateChange(state)} disabled={Boolean(selectedCity.length)}>
                  <SelectTrigger className="w-full bg-zinc-900 border-zinc-800 text-white">
                    <SelectValue placeholder="Select state"/>
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 h-[200px] border-zinc-800 text-white">
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              {/* <Select name={fields.city.name} onValueChange={handleCityChange} value={selectedCity}>
                <SelectTrigger
                  key={fields.city.key}
                  className="w-full bg-zinc-900 border-zinc-800 text-white"
                >
                  <SelectValue placeholder="Select city"/>
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                  {cities.map((city) => (
                    <SelectItem key={city.id} value={city.id}>
                      {city.name}, {city.state}
                    </SelectItem> 
                  ))}
                </SelectContent>
              </Select> */}
            <ComboboxDemo
              cities={filteredCities}
              cityMap={cityMap}
              onCitySelect={handleCitySelect}
            /> 
            </div>
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-6">
              Submit
            </Button>
          </form>

          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
