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
import { indianStates } from "@/app/utils/cities"
import { indianCities } from "@/app/utils/cities"
import { ComboboxDemo } from "@/components/ui/combobox"
import { onBoardUser } from "../actions"
import { useSupabaseUser } from "../utils/hooks"

const states = Object.values(indianStates)

interface City {
  id: string;
  name: string;
  state: string;
}

export default function OnboardingForm() {
  const { user, loading } = useSupabaseUser()
  const [filteredCities, setFilteredCities] = useState<City[]>(indianCities)
  const cityMap = useMemo(() => {
    const map = new Map()
    filteredCities.forEach(city => map.set(city.id, city))
    return map
  }, [filteredCities])
  const [lastResult, action] = useActionState(onBoardUser, undefined);
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")

  const handleCitySelect = (cityId: string) => {
    const city = cityMap.get(cityId)
    if (city) {
      setSelectedCity(city.name)
      setSelectedState(city.state)
    }
  }

  const handleStateChange = (state: string) => {
    const updatedCities = indianCities.filter((city) => city.state === state)
    setFilteredCities(updatedCities)
    setSelectedState(state)
  }

  return (
    <div className="flex calc(h-[100vh]-110px)">
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
              <span className="font-semibold text-xl">HimSanklp</span>
            </div>
            <h2 className="text-4xl font-bold mb-2">Sign Up</h2>
            <p className="text-gray-400">Create your account to get started</p>
          </div>

          <form action={action} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium">
                Full Name
              </label>
              <Input
                name="fullName"
                placeholder="John Doe"
                className="w-full bg-zinc-900 border-zinc-800 text-white"
              />
            </div>

            {/* Email Hidden */}
            <Input type="hidden" name="email" value={user?.email ?? ""} />

            {/* Age and State */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="age" className="block text-sm font-medium">
                  Age
                </label>
                <Input
                  name="age"
                  type="number"
                  min="18"
                  placeholder="25"
                  className="w-full bg-zinc-900 border-zinc-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="block text-sm font-medium">
                  State
                </label>
                <Select
                  value={selectedState}
                  onValueChange={(state) => handleStateChange(state)}
                  disabled={Boolean(selectedCity.length)}
                >
                  <SelectTrigger className="w-full bg-zinc-900 border-zinc-800 text-white">
                    <SelectValue placeholder="Select state" />
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

            {/* City Selection via Combobox */}
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              {/* Store selectedCity in a hidden input to submit it */}
              <Input type="hidden" name="city" value={selectedCity} />
              <ComboboxDemo
                cities={filteredCities}
                cityMap={cityMap}
                onCitySelect={handleCitySelect}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-6"
            >
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
