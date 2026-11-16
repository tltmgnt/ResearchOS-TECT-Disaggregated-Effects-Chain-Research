# Scope and record contract
This repository implements the agreed non-operational research workspace: architecture documentation, evidence notes, interoperability review, uncertainty and human oversight. Examples use fictional public-document exchange. It does not implement a find/fix/track/target/engage/assess workflow, targeting, engagement recommendations, weapon control, operational optimization or live operational feeds.

## Notebook schema
version: 1; name: nonempty string; records: 0–200 records.
Each record has a unique nonempty id, nonempty title, architecture, interfaceNotes, uncertainty, reviewer, rationale, status and evidence array.
status is draft, in-review or reviewed. Reviewed requires nonempty reviewer and rationale. Every evidence entry has reference and note text and basis synthetic, declared or measured. Evidence is limited to 50 references per record.

Documentation flags identify empty architecture, interface notes, uncertainty, reference absence, synthetic evidence and pending review. No scoring, ranking, readiness determination, timing optimization or effects modeling is performed. A measured label does not establish measurement validity. Reviewer identities and evidence references are not authenticated. Reviewed is a documentation status, not authorization.

## Storage and outputs
Browser localStorage stores one notebook per origin. JSON exports preserve records; CSV summarizes flags; Markdown includes notes and review. Files are ordinary unsigned records. No source retrieval, telemetry, account synchronization or external action is configured. Never enter sensitive or classified operational information. Export backups regularly.

## Evaluation plan
Use synthetic or public non-sensitive research records. Check source provenance independently. Inspect note completeness and applicability. Validate keyboard access, mobile layout, malformed imports, storage failures, and export round trips before reliance. Automated tests verify schema and documentation flags, not research correctness or operational suitability.

Independent ResearchOS TECT project. No government affiliation, endorsement, validated effectiveness or novel algorithm is claimed. TECT remains the project identifier without an assumed expansion.
