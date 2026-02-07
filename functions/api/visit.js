export async function onRequestPost({ env }) {
  const key = "amoozeshyar:visits";
  const current = parseInt((await env.VISITS.get(key)) || "0", 10) + 1;
  await env.VISITS.put(key, String(current));

  return new Response(JSON.stringify({ count: current }), {
    headers: { "content-type": "application/json" },
  });
}
