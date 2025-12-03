# Development Workflow

## Branch Structure

```
main            → Production-ready, released versions only
develop         → Latest development changes
feature/*       → New features
fix/*           → Bug fixes
hotfix/*        → Urgent production fixes
release/*       → Release preparation
```

## Quick Commands

### Starting a New Feature

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

### Starting a Bug Fix

```bash
git checkout develop
git pull origin develop
git checkout -b fix/bug-description
```

### Working on Your Branch

```bash
# Make changes, then commit
git add .
git commit -m "feat: add new search feature"
# or
git commit -m "fix: resolve CORS issue"

# Push your branch
git push origin feature/your-feature-name
```

### Commit Message Convention

| Prefix      | Use For                    |
| ----------- | -------------------------- |
| `feat:`     | New features               |
| `fix:`      | Bug fixes                  |
| `docs:`     | Documentation              |
| `style:`    | Formatting, no code change |
| `refactor:` | Code restructuring         |
| `test:`     | Adding tests               |
| `chore:`    | Maintenance tasks          |

### Merging to Develop

1. Push your branch to GitHub
2. Create a Pull Request → `develop`
3. Review & Squash Merge
4. Delete the feature branch

### Creating a Release

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.3.0

# Update version in manifest.json
# Test everything

git add manifest.json
git commit -m "chore: bump version to 1.3.0"

# Merge to main
git checkout main
git merge --no-ff release/v1.3.0
git tag -a v1.3.0 -m "Release v1.3.0"
git push origin main --tags

# Merge back to develop
git checkout develop
git merge --no-ff release/v1.3.0
git push origin develop

# Delete release branch
git branch -d release/v1.3.0
```

## Version Numbering

| Change Type      | Version | Example       |
| ---------------- | ------- | ------------- |
| Breaking changes | Major   | 1.0.0 → 2.0.0 |
| New features     | Minor   | 1.2.0 → 1.3.0 |
| Bug fixes        | Patch   | 1.2.0 → 1.2.1 |

## Current Workflow

1. `main` - Production releases only
2. `develop` - Daily development (default branch)
3. Create feature/fix branches from `develop`
4. Merge via Pull Requests with squash
5. Release branches for version bumps
