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

- [Intro to Git and GitHub 2](#intro-to-git-and-github-2)
  - [Git Branching](#git-branching)
  - - [What is a Git Branch](#what-is-a-git-branch)
  - - [Development in Branches](#development-in-branches)
  - - [Common Git Branch Commands](#common-git-branch-commands)
  - [Pull Requests](#pull-requests)
  - - [What is a Pull Request?](#what-is-a-pull-request)
  - - [Creating and Merging Pull Requests](#creating-and-merging-pull-requests)
  - - [Fetching vs Pulling](#fetching-vs-pulling)
  - [Forking Repositories](#forking-repositories)
  - - [What is a Fork?](#what-is-a-fork)
  - - [Syncing a Fork](#syncing-a-fork)
  - [⚔️ Merge Conflicts](#merge-conflicts)
  - - [What is a Merge Conflict?](#what-is-a-merge-conflict)
  - - [How Merge Conflicts Occur](#how-merge-conflicts-occur)
  - - [Resolving Merge Conflicts](#resolving-merge-conflicts)
- [📄 README.md](#readmemd)

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

## Git Setup

### Installing Git
Go to [git-scm.com](https://git-scm.com) and download Git for your operating system.

### Configuring Git
Use terminal (Mac) or Git Bash (Windows):

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## Repositories

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

## Common Commands

| **Action**            | **Command**                    |
|-----------------------|--------------------------------|
| Initialise repo       | `git init`                     |
| Stage file            | `git add <filename>`           |
| Commit                | `git commit -m "message"`      |
| Push to remote        | `git push`                     |
| Pull from remote      | `git pull`                     |
| Clone repo            | `git clone <url>`              |

---

## Intro to Git and Github 2

### Git Branching

#### What is a Git Branch?
A **branch** is a separate line of development. It's like a pointer to your latest commit, allowing you to work independently without affecting the main project. Changes are only merged into the main project when you choose to.

#### Development in Branches
- A new branch starts with the history of the parent branch.
- New commits in the new branch are **isolated**.
- To bring changes back to the parent, you must **merge**.

#### Common Git Branch Commands
> *(examples not listed in slide — add commands like `git branch`, `git checkout -b`, etc. if needed)*

---

### Pull Requests

#### What is a Pull Request?
A **pull request** is a way to propose changes from one branch to another, often used for collaboration and code review before merging.

#### Creating and Merging Pull Requests
- Pull requests are made through platforms like GitHub.
- They are reviewed, discussed, and merged into the target branch.

#### Fetching vs Pulling
- `git fetch`: Updates your remote tracking branches, **does not merge**.
- `git pull`: Fetches **and merges** changes into your current branch.

---

### Forking Repositories

#### What is a Fork?
A **fork** is a personal copy of someone else's repository. It's useful for suggesting changes to the original project without directly affecting it.

#### Syncing a Fork
To keep your fork updated:
1. Fetch/pull from the original (upstream) repo
2. Merge into your fork
3. Push to your GitHub fork

---

### Merge Conflicts

#### What is a Merge Conflict?
A **merge conflict** occurs when changes from different branches conflict (e.g., edits to the same lines in a file). Git needs your help to resolve them manually.

#### How Merge Conflicts Occur
- Two branches edit the same file in different ways
- Git cannot automatically determine which change to keep

#### Resolving Merge Conflicts
1. Open the file
2. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Edit the file to keep the correct changes
4. Add the file (`git add`) and commit

---

### README.md

#### What is a README.md File?
A **README** is often the first thing someone sees in your repository. It should include:
- What the project does
- Why it's useful
- How to get started
- Where to get help
- Who maintains/contributes to it
