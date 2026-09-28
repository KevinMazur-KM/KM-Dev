import { getCollection } from "astro:content";

export function byNewest(a, b) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export async function getPublishedWriting() {
  return (await getCollection("writing", ({ data }) => !data.draft)).sort(byNewest);
}

export async function getFeaturedWriting(limit = 3) {
  return (await getPublishedWriting()).filter((item) => item.data.featured).slice(0, limit);
}

export async function getPublishedWork() {
  return (await getCollection("work", ({ data }) => !data.draft)).sort(byNewest);
}

export async function getFeaturedWork(limit = 3) {
  return (await getPublishedWork()).filter((item) => item.data.featured).slice(0, limit);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function readingTime(body = "") {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
