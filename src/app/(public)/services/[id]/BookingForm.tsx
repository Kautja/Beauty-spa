"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  bookingDate: z.string().min(1, "Booking date is required"),
  bookingTime: z.string().min(1, "Booking time is required"),
  location: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function BookingForm({ serviceId, onSuccess }: { serviceId: string; onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { service: serviceId } });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: serviceId }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Submission failed");
      setSuccess(true);
      reset();
      onSuccess?.();
    } catch (err) {
      const error = err as Error;
      setError(error?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-sm text-foreground">Name</label>
          <input {...register("name")}
            placeholder="Enter your name"
            className="w-full border border-border bg-card rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium text-sm text-foreground">Email</label>
          <input {...register("email")}
            placeholder="Enter your email"
            className="w-full border border-border bg-card rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium text-sm text-foreground">Phone</label>
          <input {...register("phone")}
            placeholder="Enter your phone number"
            className="w-full border border-border bg-card rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block mb-1 font-medium text-sm text-foreground">Date</label>
            <input type="date" {...register("bookingDate")}
              className="w-full border border-border bg-card rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
            {errors.bookingDate && <p className="text-destructive text-xs mt-1">{errors.bookingDate.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm text-foreground">Time</label>
            <input type="time" {...register("bookingTime")}
              className="w-full border border-border bg-card rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
            {errors.bookingTime && <p className="text-destructive text-xs mt-1">{errors.bookingTime.message}</p>}
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium text-sm text-foreground">Preferred Location</label>
          <select {...register("location")} className="w-full border border-border bg-card rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
            <option value="">Select a location (Optional)</option>
            <option value="Gaborone">Gaborone</option>
            <option value="Tlokweng">Tlokweng</option>
            <option value="Phakalane">Phakalane</option>
            <option value="Francistown">Francistown</option>
            <option value="Maun">Maun</option>
            <option value="Lobatse">Lobatse</option>
          </select>
          {errors.location && <p className="text-destructive text-xs mt-1">{errors.location.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium text-sm text-foreground">Notes</label>
          <textarea {...register("notes")}
            placeholder="Any special requests or concerns?"
            className="w-full border border-border bg-card rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring" rows={2} />
          {errors.notes && <p className="text-destructive text-xs mt-1">{errors.notes.message}</p>}
        </div>
      </div>
      {error && <div className="text-destructive text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">Booking successful! We will confirm your appointment shortly.</div>}
      <button type="submit" className="bg-foreground text-background hover:opacity-90 rounded-full px-6 py-3 text-sm font-medium transition w-full" disabled={loading}>
        {loading ? "Submitting..." : "Book Appointment"}
      </button>
    </form>
  );
}
