# Claude Code Action Setup Guide

This repository uses [Claude Code Action](https://github.com/anthropics/claude-code-action) to automate PR review iteration.

## Quick Setup (5 minutes)

### 1. Get Anthropic API Key

```bash
# Visit https://console.anthropic.com/settings/keys
# Create a new API key
# Copy the key (starts with sk-ant-...)
```

### 2. Add Secret to GitHub

```bash
# Go to: https://github.com/matthewhudson/goldies/settings/secrets/actions
# Click "New repository secret"
# Name: ANTHROPIC_API_KEY
# Value: <paste your API key>
# Click "Add secret"
```

### 3. Install GitHub App (Optional but Recommended)

```bash
# In your local terminal:
cd ~/Projects/goldies
claude
/install-github-app
```

This provides better integration and permissions management.

## Usage

### Automatic Mode

When Copilot or Cursor Bugbot posts review comments, the workflow automatically:
1. Analyzes all feedback
2. Fixes critical/high severity issues
3. Commits changes
4. Runs tests and lint

No action needed - it just works!

### Manual Trigger Mode

Comment on any PR:
```
@claude please address the review feedback
```

Claude will:
- Review all comments
- Fix valid issues
- Iterate up to 3 times
- Post a summary when done

## Workflows

### `claude-review-fixes.yml`
- Triggers: When reviews are submitted
- Purpose: Quick fixes for review comments
- Auto-commits: Yes

### `claude-pr-iteration.yml`
- Triggers: When @claude is mentioned
- Purpose: Iterative improvement until all feedback is addressed
- Iterations: Up to 3 times
- Auto-commits: Yes

## Cost Management

Each PR iteration costs approximately:
- **Input**: ~10-50k tokens ($0.30-$1.50)
- **Output**: ~5-20k tokens ($3.75-$15.00)
- **Total per iteration**: ~$4-16

To limit costs:
- Set a monthly budget in Anthropic console
- Use manual trigger mode (`@claude`) instead of automatic
- Disable workflows by removing them from `.github/workflows/`

## Disabling

To disable automated fixes:

```bash
# Temporary (skip workflow)
git mv .github/workflows/claude-review-fixes.yml .github/workflows/claude-review-fixes.yml.disabled

# Permanent (delete)
rm .github/workflows/claude-review-fixes.yml
rm .github/workflows/claude-pr-iteration.yml
```

## Troubleshooting

### "ANTHROPIC_API_KEY not found"
- Verify secret is added: Settings → Secrets → Actions
- Name must be exactly `ANTHROPIC_API_KEY`

### "Insufficient permissions"
- Workflow needs `contents: write` and `pull-requests: write`
- Check workflow file permissions block

### Claude makes unwanted changes
- Adjust the `prompt` in the workflow file
- Add specific instructions about what NOT to change
- Use manual trigger mode for more control

## Security

- API key is stored as an encrypted GitHub secret
- Never logged or exposed in workflow runs
- Only accessible to workflows in this repository
- Can be rotated at any time in Anthropic console

## Learn More

- [Claude Code Action Docs](https://github.com/anthropics/claude-code-action)
- [Solutions Guide](https://github.com/anthropics/claude-code-action/blob/main/docs/solutions.md)
- [Anthropic API Docs](https://docs.anthropic.com/)
