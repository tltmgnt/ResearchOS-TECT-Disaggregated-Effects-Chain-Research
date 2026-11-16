# ResearchOS TECT — Disaggregated Effects-Chain Research
A non-operational research notebook for architecture documentation, evidence management, interoperability review, uncertainty and human oversight.

## Implemented
Browser app with a JSON notebook editor, add-record action, documentation flags, human review form, local storage, JSON import/export, CSV summaries and Markdown research reports. A shared validation/summary module and CLI provide reproducible documentation checks. Synthetic examples describe public-document exchange.

The implemented scope does not include targeting workflows, engagement recommendations, weapons control, operational optimization or live feeds. See [scope and record contract](docs/SCOPE.md).

## Run
Node 22+; no npm dependencies:
```sh
npm test
npm run build
python -m http.server 8000 --directory dist
```
Open http://localhost:8000. Or serve the repository root. ES modules and example loading require localhost or HTTPS; file:// is unsupported.

## CLI
```sh
node cli.mjs example.json
node cli.mjs example.json review.json
node cli.mjs example.json review.csv
```
Existing output files are refused. Source notes and reviewer identities are owner declarations, not verified evidence or authenticated approval. Export browser backups regularly.

## Verification
Eight tests cover documentation flags, review requirements, invalid records, deterministic summaries and export escaping. Node 22/24 CI checks syntax, tests, CLI and static packaging, then uploads app artifacts. Execution and interactive browser verification were unavailable during implementation. Hosting is not configured.

## License
Apache-2.0 license retained. Independent project with no DARPA affiliation or endorsement.
