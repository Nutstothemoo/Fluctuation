import { createClient } from "next-sanity";

const projectId = "usflqf5r"; // "pv8y60vp"
const dataset = "production"
const apiVersion = "2023-05-03";

export const client = createClient({
	projectId,
	dataset,
	apiVersion, // https://www.sanity.io/docs/api-versioning
	useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
