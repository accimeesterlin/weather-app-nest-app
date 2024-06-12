"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { IWeatherData } from "@/types/weather-type";

const FormSchema = z.object({
  query: z.string().min(2, {
    message: "Query must be at least 2 characters.",
  }),
});

// Create Props
type IProps = {
  weather: IWeatherData;
  setWeather: (weather: IWeatherData) => void;
};

export function SearchForm({ weather, setWeather }: IProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    const query = data.query;

    await searchCity(query);

    // Empty the form
    form.reset();

    setIsLoading(false);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  // Search City
  const searchCity = async (city: string) => {
    try {
      // TODO:
      const { data } = await axios(
        `${process.env.REACT_APP_OPEN_WEATHER_BASE_URL}/city`,
        {
          params: {
            q: city,
          },
        }
      );

      setWeather(data);
    } catch (error) {
      // TODO: Handle error
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-[326px] w-full space-y-6"
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search For City</FormLabel>
              <FormControl>
                <Input placeholder="Enter a city (ex. Atlanta)" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Search
        </Button>
      </form>
    </Form>
  );
}
