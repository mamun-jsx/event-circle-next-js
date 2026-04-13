"use client";
import { useForm, SubmitHandler } from "react-hook-form";

enum EventTypeEnum {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}
interface IAddFormInput {
  title: string;
  image: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  type: EventTypeEnum;
  registrationFee: number;
  isFeatured: boolean;
  organizer: {
    name: string;
    email: string;
  };
}
const AddEventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddFormInput>({
    defaultValues: {
      type: EventTypeEnum.PUBLIC,
      registrationFee: 0,
      isFeatured: false,
    },
  });

  const onSubmit: SubmitHandler<IAddFormInput> = (data) =>
    console.log(typeof data.registrationFee);

  const labelStyle = "block text-sm font-semibold text-[--ec-gray-300] mb-1";
  const inputStyle =
    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--ec-primary] focus:border-transparent outline-none transition-all text-[--foreground]";
  const errorStyle = "text-red-500 text-xs mt-1";

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-[--ec-primary] mb-6">
        Create New Event
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Event Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className={inputStyle}
              placeholder="e.g. Tech Conference 2024"
            />
            {errors.title && (
              <p className={errorStyle}>{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className={labelStyle}>Image URL</label>
            <input
              {...register("image", { required: "Image URL is required" })}
              className={inputStyle}
              placeholder="https://image-link.com"
            />
            {errors.image && (
              <p className={errorStyle}>{errors.image.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className={labelStyle}>Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className={`${inputStyle} h-24 resize-none`}
            placeholder="Tell us about the event..."
          />
          {errors.description && (
            <p className={errorStyle}>{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className={labelStyle}>Date</label>
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className={inputStyle}
            />
            {errors.date && <p className={errorStyle}>{errors.date.message}</p>}
          </div>
          <div>
            <label className={labelStyle}>Time</label>
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className={inputStyle}
            />
            {errors.time && <p className={errorStyle}>{errors.time.message}</p>}
          </div>
          <div>
            <label className={labelStyle}>Venue / Address</label>
            <input
              {...register("venue", { required: "Venue is required" })}
              className={inputStyle}
              placeholder="Physical location or Address"
            />
            {errors.venue && (
              <p className={errorStyle}>{errors.venue.message}</p>
            )}
          </div>
        </div>

        {/* Added missing Type, Fee, and Featured logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className={labelStyle}>Event Type</label>
            <select
              {...register("type", { required: true })}
              className={inputStyle}
            >
              <option value={EventTypeEnum.PUBLIC}>Public</option>
              <option value={EventTypeEnum.PRIVATE}>Private</option>
            </select>
          </div>
          <div>
            <label className={labelStyle}>Registration Fee ($)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              {...register("registrationFee", {
                required: "Fee is required",
                valueAsNumber: true,
                min: { value: 0, message: "Fee cannot be negative" },
              })}
              className={inputStyle}
              placeholder="0.00 (0 for Free)"
            />
            {errors.registrationFee && (
              <p className={errorStyle}>{errors.registrationFee.message}</p>
            )}
          </div>
          <div className="flex items-center space-x-3 pb-3">
            <input
              type="checkbox"
              {...register("isFeatured")}
              className="w-5 h-5 accent-[--ec-accent]"
              id="featured"
            />
            <label
              htmlFor="featured"
              className="text-sm font-medium text-[--ec-gray-300]"
            >
              Feature this event
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
          <h3 className="text-sm font-bold text-[--ec-secondary] uppercase tracking-wider mb-4">
            Organizer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Full Name</label>
              <input
                {...register("organizer.name", {
                  required: "Name is required",
                })}
                className={inputStyle}
                placeholder="Contact Person"
              />
              {errors.organizer?.name && (
                <p className={errorStyle}>{errors.organizer.name.message}</p>
              )}
            </div>
            <div>
              <label className={labelStyle}>Email Address</label>
              <input
                type="email"
                {...register("organizer.email", {
                  required: "Email is required",
                })}
                className={inputStyle}
                placeholder="organizer@example.com"
              />
              {errors.organizer?.email && (
                <p className={errorStyle}>{errors.organizer.email.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-ec-primary hover:bg-ec-accent text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
