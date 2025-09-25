import { NextResponse } from "next/server";
import { projects } from "@/app/data/projects";

export async function GET() {
  return NextResponse.json(projects);
}
