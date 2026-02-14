import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://career.betopiagroup.com/api/jobs/published",
      {
        headers: {
          Cookie:
            "session_id=0h8nm3rnEIXgOfSs6mAFyROm8eLFLnF6biQrFYVBm63PXXBa09aNQ78jNn7nkrwBHJBTb1U5rjjCUFL7CjXZ",
        },
        // Revalidate every 60 seconds
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to fetch jobs from upstream" },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Jobs API proxy error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
