import { NextResponse } from "next/server";
import statusList from "@/public/statusList.json";

export async function GET(
  _request: Request,
  { params }: { params: { key: number } }
) {
  const item = statusList.find((obj) => obj.key == params.key);
  return NextResponse.json({ key: item });
}
