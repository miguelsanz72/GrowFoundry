# GrowFoundry Claude Code Plugin

Official plugin for building with GrowFoundry in Claude Code.

The public plugin is maintained in the
[GrowFoundry/growfoundry-skills](https://github.com/GrowFoundry/growfoundry-skills)
repository. This repository keeps the marketplace entry so users can install it
from the GrowFoundry marketplace.

## Installation

In Claude Code, run:

```
/plugin marketplace add GrowFoundry/GrowFoundry
```

Then install the plugin:

```
/plugin install growfoundry
```

## What's Included

The public plugin currently includes four skills.

### `growfoundry`

Guidance for building application code with GrowFoundry and `@growfoundry/sdk`,
including database CRUD, auth, storage uploads, functions, OpenRouter AI,
realtime, email, Stripe flows, and S3-compatible storage integrations.

### `growfoundry-cli`

Command-line project management with `@growfoundry/cli`, including project
creation, linking, SQL, migrations, RLS policies, functions, storage,
deployments, compute services, secrets, AI setup, payments, schedules, logs,
imports, exports, and backend branches.

### `growfoundry-debug`

Diagnostics for GrowFoundry project issues, including SDK errors, HTTP failures,
edge function failures, database performance, auth and RLS denials, realtime
issues, and deployment failures.

### `growfoundry-integrations`

Integration guides for third-party auth providers and related RLS setup,
including Auth0, Clerk, Kinde, Stytch, WorkOS, Better Auth, and payment
facilitator guidance.

## Usage

Once installed, Claude Code can load GrowFoundry-specific guidance when you are:

- setting up backend infrastructure such as tables, buckets, functions, auth,
  AI, payments, or deployments
- integrating `@growfoundry/sdk` into frontend or server applications
- implementing database access with RLS-aware patterns
- debugging GrowFoundry project errors and deployment issues
- connecting external auth providers to GrowFoundry

## Repository Layout Note

The public plugin lives in
[GrowFoundry/growfoundry-skills](https://github.com/GrowFoundry/growfoundry-skills).

The `.claude/skills/` and `.agents/skills/` directories in this repository are
internal contributor skills for people working on the GrowFoundry OSS repository.
They are not the public Claude Code plugin and should not be used as the
marketplace source.

## Contributing

To improve the public plugin, contribute to
[GrowFoundry/growfoundry-skills](https://github.com/GrowFoundry/growfoundry-skills).

The skills in that repository are Markdown files with YAML frontmatter. See its
`CONTRIBUTING.md` for guidelines on adding or improving skills.

## Feedback

Found an issue or have a suggestion? [Open an issue](https://github.com/GrowFoundry/GrowFoundry/issues)
or join our [Discord](https://discord.com/invite/MPxwj5xVvW).

## License

MIT - Same as the public GrowFoundry skills plugin.
