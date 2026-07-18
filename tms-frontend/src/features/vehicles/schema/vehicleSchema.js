import { z } from "zod";

export const vehicleSchema = z.object({
  number: z
    .string()
    .min(5, "Vehicle number is required"),

  type: z
    .string()
    .min(1, "Vehicle type is required"),

  brand: z
    .string()
    .min(2, "Brand is required"),

  model: z
    .string()
    .min(1, "Model is required"),

  capacity: z
    .string()
    .min(1, "Capacity is required"),

  fuelType: z
    .string()
    .min(1, "Fuel type is required"),

  status: z
    .string()
    .min(1, "Status is required"),
});