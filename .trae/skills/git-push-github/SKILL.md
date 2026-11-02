---
name: git-push-github
description: Commit and push the current project to the configured GitHub repo. Use when the user asks to submit, commit, push, or publish the project to GitHub. Do not use for Gitee pushes or unrelated repos.
---

# Git Push GitHub

Commit all changes in `d:\GJWY` and push to the GitHub repository using the pre-configured SSH key (`~/.ssh/id_ed25519`).

## Target

- Project path: `d:\GJWY`
- GitHub repo (SSH): `git@github.com:yitianti/yangtt.git`
- Branch: `master`
- SSH key: `~/.ssh/id_ed25519` — already authorized for `yitianti`

## Steps

Run commands from `d:\GJWY`. PowerShell 5 compatible (no `&&`, no cmd.exe).

1. **Check status** (informative)
   ```powershell
   $env:GIT_PAGER="cat"
   cd "d:\GJWY"
   git status -s
   git log --oneline -3
   ```

2. **Stage all changes**
   ```powershell
   git add -A
   ```

3. **Commit**. Write a concise message that describes *what changed*, not *that we committed*. Use Chinese when the repo history is Chinese.
   ```powershell
   git commit -m "feat: 简短描述本次变更"
   ```
   If no changes are staged, skip to step 4 and tell the user nothing was committed.

4. **Push to GitHub** via SSH (not HTTPS, no token needed)
   ```powershell
   git push git@github.com:yitianti/yangtt.git master
   ```
   Do NOT set this URL as `origin`. Origin stays on Gitee for this project. Just use the inline URL above.

5. **Report** — show the commit hash and confirm push success. If push fails with auth error, run `ssh -T git@github.com` to diagnose before retrying.

## Known caveats

- This project also has a Gitee origin. Do NOT rewrite `origin`. Push to GitHub with the inline URL only.
- `.gitignore` already excludes OS/IDE/cache files and `ytt_prompt.md`. Don't re-create it.
- LF/CRLF warnings on Windows are normal; don't attempt to fix unless the user asks.
