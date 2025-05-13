# Git and GitHub
## 📚 Contents
- [Intro to Git and GitHub](#intro-to-git-and-github)
  - [What is Version Control?](#what-is-version-control)
  - [Git vs GitHub](#git-vs-github)
  - [Git Setup](#git-setup)
    - [Installing Git](#installing-git)
    - [Configuring Git](#configuring-git)
  - [Repositories](#repositories)
    - [Local vs Remote](#local-vs-remote)
    - [Git Workflow Stages](#git-workflow-stages)
  - [Common Commands](#common-commands)

---

## Intro to Git and GitHub

### What is Version Control?
A **version control system (VCS)** is a system that tracks and manages changes to files.

### Benefits of using Git:
- 👥 **Collaboration**: Multiple developers can work on the same codebase.
- 📜 **Version History**: Keeps a record of all changes.
- 🔁 **Undo/Rollback**: Revert to previous versions if needed.
- 🌿 **Branching & Merging**: Work on features separately and combine them later.

### Git vs GitHub
- **Git** is the version control tool used locally on your machine.
- **GitHub** is a platform for hosting Git repositories remotely for collaboration and backup.

**Distributed VCS:**
- Local repo: on your computer.
- Remote repo: stored on a server (e.g., GitHub).

---

## ⚙️ Git Setup

### Installing Git
Go to [git-scm.com](https://git-scm.com) and download Git for your operating system.

### Configuring Git
Use terminal (Mac) or Git Bash (Windows):

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 🗃️ Repositories

### Local vs Remote
- **Local repository**: your personal working copy.
- **Remote repository**: hosted on GitHub, used for sharing and backup.

### Git Workflow Stages
- **Working Directory** – your actual files
- **Staging Area** – files ready to be committed
- **Repository** – committed history

### Commands

```
git init              # Start a new local repository
ls -a                 # Show hidden files (e.g., .git folder)
git add filename      # Stage a file
git commit -m "msg"   # Commit staged files
```

### Remote Repository
- Hosted on GitHub.
- Used to share code with others.

### Push & Pull

```
git push              # Upload local commits to GitHub
git pull              # Fetch and merge changes from GitHub
```

### Clone a Repo

```
git clone <url>       # Copy a remote repo to your machine
```

---

## 🛠️ Common Commands

| **Action**            | **Command**                    |
|-----------------------|--------------------------------|
| Initialise repo       | `git init`                     |
| Stage file            | `git add <filename>`           |
| Commit                | `git commit -m "message"`      |
| Push to remote        | `git push`                     |
| Pull from remote      | `git pull`                     |
| Clone repo            | `git clone <url>`              |
