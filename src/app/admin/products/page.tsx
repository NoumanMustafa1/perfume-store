import Link from "next/link";
import { prisma } from "../../../lib/prisma";
import DeleteButton from "../../../components/admin/DeleteButton";

export default async function Products() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Product Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your perfume inventory and collections.
          </p>
        </div>

        <Link
          href="/admin/products/add"
          className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          + Add Product
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">
          Total Products
        </h2>

        <p className="mt-2 text-3xl font-bold">
          {products.length}
        </p>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="rounded-xl bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Products Found
          </h2>

          <p className="mt-3 text-gray-500">
            Start by adding your first perfume.
          </p>

          <Link
            href="/admin/products/add"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white"
          >
            Add First Product
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">
                    ${product.price}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      product.stock > 10
                        ? "bg-green-100 text-green-700"
                        : product.stock > 0
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.stock} in stock
                  </span>
                </div>

                {/* Description */}
                <p className="mb-6 line-clamp-2 text-sm text-gray-600">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={`/product/${product.slug}`}
                    target="_blank"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center text-sm font-medium transition hover:bg-gray-100"
                  >
                    View
                  </Link>

                  <Link
                    href={`/admin/products/edit/${product.id}`}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  <DeleteButton id={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}