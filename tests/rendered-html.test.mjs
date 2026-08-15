import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete earlier Megyesi site plan", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Megyesi Bt\. – Minőségi tűzifa házhozszállítás<\/title>/i);
  assert.match(html, /Tűzifa házhozszállítással/);
  assert.match(html, /BEMUTATKOZÁS/);
  assert.match(html, /Rendelés menete/);
  assert.match(html, /tel:\+36309869255/);
  assert.match(html, /mailto:megyesibt@gmail\.com/);
  assert.match(html, /https:\/\/www\.google\.com\/maps\?q=Nemeskolta&amp;output=embed/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
