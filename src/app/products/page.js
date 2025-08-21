import Link from "next/link";
import Image from "next/image";

export default async function ProductsPage() {

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">All Products :</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((p) => (
          <div
            key={p._id}
            className="border border-neutral-content rounded p-4 shadow space-y-3"
          >
            {/* Product Image */}
            <div className="w-full h-48 relative">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Product Info */}
            <h1 className="font-semibold text-2xl">{p.name}</h1>
            <p className="text-secondary-content">{p.description}</p>
            <p className="text-green-600 text-lg font-semibold">${p.price}</p>

            <Link
              href={`/products/${p._id}`}
              className="btn btn-primary btn-sm rounded-lg mt-2"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
