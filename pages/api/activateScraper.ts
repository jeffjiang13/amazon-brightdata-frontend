// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from "../../firebaseAdmin";
import admin from "firebase-admin";

type Data = {
  collection_id: string;
  start_eta: number;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  try {
    console.log("Submitting...");

    const search = req.body.search;

    console.log("SEARCH IS >> ", search);

    const response = await fetch(
      "https://api.brightdata.com/dca/trigger?collector=c_leh2wyperkyo5n10s&queue_next=1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search,
        }),
      }
    );

    const data = await response.json();
    console.log("DATA IS >>>", data);
    const { collection_id, start_eta } = data;

    console.log("COLLECITON ID >>>", collection_id);

    await adminDb.collection("searches").doc(collection_id).set({
      search,
      start_eta,
      status: "pending",
      updatedAt: admin.firestore.Timestamp.now(),
    });

    return res.status(200).json({ collection_id, start_eta });
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

// https://42a6-94-204-90-108.eu.ngrok.io/brightdata-build/us-central1/helloWorld
