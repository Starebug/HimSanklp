"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface City {
  id: string;
  name: string;
  state: string;
}

interface CitySelectProps {
  cities: City[];
  cityMap: Map<string, City>;
  onCitySelect: (cityId:string) => void;
}

export function ComboboxDemo({ cities, cityMap, onCitySelect}: CitySelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedCity,setSelectedCity] = useState<City|null>(null);
  useEffect(() => {
    if (selectedCity) {
      console.log("Selected city changed:", selectedCity);
    }
  }, [selectedCity]);
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] bg-zinc-900 justify-between"
        >
          {selectedCity ? `${selectedCity.name}, ${selectedCity.state}` : "Select City"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search city..." className="h-9" />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {cities.map((city) => (
                <CommandItem
                  key={city.id}
                  value={`${city.name.toLowerCase()}, ${city.state.toLowerCase()}`}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    console.log(cityMap.get(currentValue));
                    setSelectedCity(cityMap.get(currentValue)!)
                    setOpen(false);
                    onCitySelect(currentValue)
                  }}>
                  {city.name}, {city.state}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === city.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
