export default {
  async fetch(request, env, ctx) {
    const e = env || {};
    const u = e.U || e.u || null;
    return new Response(JSON.stringify({
      envKeys: Object.keys(e),
      U_present: !!u,
      U_len: u ? String(u).length : 0,
      U_prefix: u ? String(u).substring(0, 8) : null,
      ts: new Date().toISOString()
    }, null, 2), { status: 200, headers: { "Content-Type": "application/json" } });
  }
};
