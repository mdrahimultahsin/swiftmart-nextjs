// app/api/products/route.js

import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("swiftmart");
    const products = await db.collection("products").find({}).toArray();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST new product

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, price, description,image,category } = body;

    if (!name || !price || !description || !image || !category) {
      return NextResponse.json(
        { error: "All fields are required (name, price, description)" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("swiftmart");

    const result = await db.collection("products").insertOne({
      name,
      category,
      price,
      description,
      image,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Product added successfully", productId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}