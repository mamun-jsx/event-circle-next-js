"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { IEvent } from "@/Types/fetchDataType";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { updateEvent } from "@/action/admin";

const EditEventForm = ({ initialData }: { initialData: IEvent }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEvent>({
    defaultValues: initialData,
  });

  const onSubmit: SubmitHandler<IEvent> = async (data) => {
    try {
      const result = await updateEvent(initialData.id, data);
      console.log("Updated Data:", result);
      toast.success("Event updated successfully!");
      router.push("/dashboard/manage-events");
      router.refresh();
    } catch (error) {
      toast.error("Failed to update event");
    }
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ec-accent outline-none transition-all";
  const labelStyle = "block text-sm font-bold text-gray-700 mb-2";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="md:col-span-2">
          <label className={labelStyle}>Event Title</label>
          <input
            {...register("title", { required: true })}
            className={inputStyle}
          />
        </div>

        {/* Image URL */}
        <div className="md:col-span-2">
          <label className={labelStyle}>Image URL</label>
          <input {...register("image")} className={inputStyle} />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className={labelStyle}>Description</label>
          <textarea
            {...register("description")}
            rows={4}
            className={inputStyle}
          />
        </div>

        {/* Date & Time */}
        <div>
          <label className={labelStyle}>Date</label>
          <input type="date" {...register("date")} className={inputStyle} />
        </div>
        <div>
          <label className={labelStyle}>Time</label>
          <input type="time" {...register("time")} className={inputStyle} />
        </div>

        {/* Venue */}
        <div className="md:col-span-2">
          <label className={labelStyle}>Venue</label>
          <input {...register("venue")} className={inputStyle} />
        </div>

        {/* Fee & Type */}
        <div>
          <label className={labelStyle}>Registration Fee (৳)</label>
          <input
            type="number"
            {...register("registrationFee")}
            className={inputStyle}
          />
        </div>
        <div>
          <label className={labelStyle}>Event Type</label>
          <select {...register("type")} className={inputStyle}>
            <option value="PUBLIC">PUBLIC</option>
            <option value="PRIVATE">PRIVATE</option>
          </select>
        </div>

        {/* Organizer Details */}
        <div>
          <label className={labelStyle}>Organizer Name</label>
          <input {...register("organizerName")} className={inputStyle} />
        </div>
        <div>
          <label className={labelStyle}>Organizer Email</label>
          <input {...register("organizerEmail")} className={inputStyle} />
        </div>
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer mt-10 py-4 bg-black text-white font-black rounded-2xl hover:bg-ec-accent transition-all shadow-lg shadow-gray-200"
      >
        Update Now
      </button>
    </form>
  );
};

export default EditEventForm;
