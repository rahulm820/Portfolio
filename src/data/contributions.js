export const contributions = [
  {
    id: 'oss-1',
    repo: 'topoteretes/cognee-rs',
    repoDescription: 'Cognee Rust — the fast, self-hosted AI memory engine',
    title: 'WebAssembly port — logic-only crates run on wasm32 (browser-verified)',
    description: 'Made cognee-rs’s logic-only crates compile and run on wasm32-unknown-unknown with JS glue — verified in a real headless browser via wasm-bindgen, not just Node. Diagnosed and fixed six wasm blockers with minimal, target-gated changes and zero native-build impact: getrandom JS RNG backend across two major versions, per-crate tokio feature splits, cfg-gating filesystem streaming, the chrono Utc::now() runtime trap, and storage-trait coupling. Added shared smoke tests run by both Node and headless-Chrome runners so they can never drift.',
    tech: ['Rust', 'WebAssembly', 'wasm-bindgen', 'Cargo', 'tokio'],
    pr: 25,
    prUrl: 'https://github.com/topoteretes/cognee-rs/pull/25',
    status: 'Merged',
  },
];
