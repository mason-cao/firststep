import { createHash } from "node:crypto";

export function requestFingerprint(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 24);
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  let suppliedOrigin: string;
  try {
    suppliedOrigin = new URL(origin).origin;
  } catch {
    return false;
  }

  if (suppliedOrigin === new URL(request.url).origin) return true;

  // Reverse proxies such as Railway terminate HTTPS before forwarding the
  // request to Next.js. In that case request.url contains the internal service
  // address, while these headers preserve the public browser-facing origin.
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || request.headers.get("host")?.trim();
  if (!host) return false;

  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim()
    .replace(/:$/, "");
  const protocol = forwardedProtocol || new URL(request.url).protocol.replace(/:$/, "");

  return suppliedOrigin === `${protocol}://${host}`;
}
