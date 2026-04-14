import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Standard structural payload parameters specifically tailored for incoming leads
    const { client_name, client_phone, client_message, source } = data;

    if (!client_name || !client_phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are strictly required fields." },
        { status: 400 }
      );
    }

    // In a production environment, this payload would route to an external CRM, 
    // a PostgreSQL database pool, or dispatch via a Telegram Bot API webhook.
    console.log("=== NEW LEAD RECEIVED ===");
    console.log(`Source:  ${source}`);
    console.log(`Name:    ${client_name}`);
    console.log(`Phone:   ${client_phone}`);
    if (client_message) console.log(`Message: ${client_message}`);
    console.log("=========================");

    return NextResponse.json({ success: true, message: "Lead submitted successfully." }, { status: 200 });
  } catch (error) {
    console.error("Lead submission exception:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error during lead processing." },
      { status: 500 }
    );
  }
}
