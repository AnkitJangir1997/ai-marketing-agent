import { NextResponse } from "next/server";
import { testWordPressConnection } from "@/lib/wordpressService";

export async function POST(request) {
  try {
    const body = await request.json();
    const { wpUrl, username, applicationPassword } = body;

    const result = await testWordPressConnection({
      wpUrl,
      username,
      applicationPassword,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
