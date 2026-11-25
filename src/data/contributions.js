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
  {
    id: 'oss-2',
    repo: 'kestra-io/kestra',
    repoDescription: 'Kestra — the open-source orchestration and scheduling platform',
    title: 'PausedAlert info box on the execution Overview page',
    description: 'Added a warning alert on the execution Overview page when an execution is in the PAUSED state, prompting the user to validate and resume it. Built as a new PausedAlert component styled to match the existing ErrorAlert, and wired into Overview.vue. Added the new i18n keys across all 13 locale files.',
    tech: ['Vue', 'TypeScript', 'i18n'],
    pr: 20220,
    prUrl: 'https://github.com/kestra-io/kestra/pull/20220',
    status: 'Merged',
  },
];
