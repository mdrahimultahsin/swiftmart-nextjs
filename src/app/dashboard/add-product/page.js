"use client";
import Spinner from "@/app/components/Spinner";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function AddProductPage() {
  const {data: session, status} = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (status === "loading") return <Spinner />;
  if (!session) {
    router.push("/login");
    return null;
  }
const categories = ["Electronics", "Fashion", "Home Appliances", "Fitness", "Accessories","Others"];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        category: e.target.category.value,
        description: e.target.description.value,
        price: e.target.price.value,
        image: e.target.image.value,
      }),
      headers: {"Content-Type": "application/json"},
    });
    setLoading(false);
    if (res.ok) router.push("/products");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-base-300 my-10 rounded-lg">
      <h2 className="text-2xl font-bold">Add Product</h2>
      <input
        name="name"
        placeholder="Name"
        className="border p-2 w-full"
        required
      />
{/* Category Dropdown */}
      <select name="category" className="border p-2 w-full rounded" required defaultValue="">
        <option value="" disabled className="text-black">
          Select Category
        </option>
        {categories.map((cat) => (
          <option className="text-black" key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        name="price"
        type="number"
        placeholder="Price"
        className="border p-2 w-full"
        required
      />
      <input
        name="image"
        type="url"
        placeholder="Product Image URL"
        className="border p-2 w-full"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded flex items-center justify-center"
        disabled={loading} 
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : null}
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}
