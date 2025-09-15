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

## Common Commands

| Category          | Command                                      | What it does                             | Example                                           |
| ----------------- | -------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| Setup             | `git config --global user.name "<name>"`     | Set your display name.                   | `git config --global user.name "Alex Dev"`        |
| Setup             | `git config --global user.email "<email>"`   | Set your email.                          | `git config --global user.email alex@example.com` |
| New repo          | `git init`                                   | Create a new repo in the current folder. | `git init`                                        |
| Clone             | `git clone <url>`                            | Copy a remote repo.                      | `git clone https://github.com/user/app.git`       |
| Status            | `git status`                                 | Show changed files and branch.           | `git status`                                      |
| Stage             | `git add <file>`                             | Stage a file.                            | `git add app.py`                                  |
| Stage (all)       | `git add -A`                                 | Stage all changes.                       | `git add -A`                                      |
| Commit            | `git commit -m "<message>"`                  | Save staged changes.                     | `git commit -m "Add login"`                       |
| Quick commit      | `git commit -am "<message>"`                 | Stage modified tracked files and commit. | `git commit -am "Fix typo"`                       |
| History           | `git log`                                    | Show commit history.                     | `git log`                                         |
| History (compact) | `git log --oneline --graph --decorate --all` | Pretty one-line graph.                   | `git log --oneline --graph --decorate --all`      |
| Differences       | `git diff`                                   | See unstaged changes.                    | `git diff`                                        |
| Staged diff       | `git diff --staged`                          | See staged changes.                      | `git diff --staged`                               |
| Show commit       | `git show <ref>`                             | Show a commit or object.                 | `git show HEAD~1`                                 |
| Branch list       | `git branch`                                 | List branches. Current is `*`.           | `git branch`                                      |
| New branch        | `git switch -c <branch>`                     | Create and switch to a branch.           | `git switch -c feature/auth`                      |
| Switch            | `git switch <branch>`                        | Move to another branch.                  | `git switch main`                                 |
| Rename branch     | `git branch -m <new>`                        | Rename current branch.                   | `git branch -m main`                              |
| Merge             | `git merge <branch>`                         | Merge a branch into current.             | `git merge feature/auth`                          |
| Rebase ⚠️         | `git rebase <branch>`                        | Replay commits on top of another.        | `git rebase main`                                 |
| Remote list       | `git remote -v`                              | Show remotes and URLs.                   | `git remote -v`                                   |
| Add remote        | `git remote add origin <url>`                | Add a remote named `origin`.             | `git remote add origin https://…`                 |
| First push        | `git push -u origin <branch>`                | Push and set upstream.                   | `git push -u origin main`                         |
| Push              | `git push`                                   | Push current branch.                     | `git push`                                        |
| Fetch             | `git fetch`                                  | Get remote refs without merging.         | `git fetch`                                       |
| Pull              | `git pull`                                   | Fetch and merge.                         | `git pull`                                        |
| Pull (rebase)     | `git pull --rebase`                          | Fetch then rebase.                       | `git pull --rebase`                               |
| Tags              | `git tag <name>`                             | Create a lightweight tag.                | `git tag v1.0.0`                                  |
| Tags (annotated)  | `git tag -a <name> -m "<msg>"`               | Tag with message.                        | `git tag -a v1.0.0 -m "First release"`            |
| Push tags         | `git push origin --tags`                     | Push all tags.                           | `git push origin --tags`                          |
| Stash             | `git stash`                                  | Save work-in-progress.                   | `git stash`                                       |
| Stash list        | `git stash list`                             | List stashes.                            | `git stash list`                                  |
| Stash apply       | `git stash apply [<stash>]`                  | Apply, keep stash.                       | `git stash apply stash@{0}`                       |
| Stash pop         | `git stash pop`                              | Apply, then drop.                        | `git stash pop`                                   |
| Restore file      | `git restore <file>`                         | Discard unstaged changes.                | `git restore app.py`                              |
| Unstage file      | `git restore --staged <file>`                | Remove from staging.                     | `git restore --staged app.py`                     |
| Reset file        | `git reset HEAD <file>`                      | Unstage (legacy form).                   | `git reset HEAD app.py`                           |
| Revert commit     | `git revert <ref>`                           | New commit that undoes a commit.         | `git revert HEAD~1`                               |
| Hard reset ⚠️     | `git reset --hard <ref>`                     | Move branch and discard changes.         | `git reset --hard origin/main`                    |
| Clean ⚠️          | `git clean -fd`                              | Delete untracked files/dirs.             | `git clean -fd`                                   |
| Blame             | `git blame <file>`                           | Who changed each line.                   | `git blame app.py`                                |
| Reflog            | `git reflog`                                 | Log of branch tips (rescue tool).        | `git reflog`                                      |


---

## Intro to Git and GitHub

**Git** is a **Version Control System** (VCS)
- It was created by Linus Torvalds in 2005, and has been maintained by Junio Hamano since 

It is used for:
  - Tracking code changes
  - Tracking who made changes
  - Coding collaboration

**Key Git Concepts**
- *Repository:* A folder where Git tracks your project and its history.
- *Clone:* Make a copy of a remote repository on your computer.
- *Stage:* Tell Git which changes you want to save next.
- +Commit:* Save a snapshot of your staged changes.
- *Branch:* Work on different versions or features at the same time.
- *Merge:* Combine changes from different branches.
- *Pull:* Get the latest changes from a remote repository.
- *Push:* Send your changes to a remote repository.

**Working with Git**
- Initialize Git on a folder, making it a *Repository*
- Git now creates a hidden folder to keep track of changes in that folder
- When a file is changed, added or deleted, it is considered *modified*
- You select the modified files you want to *Stage*
- The *Staged* files are *Committed*, which prompts Git to store a permanent snapshot of the files
- Git allows you to see the full history of every commit.
- You can revert back to any previous commit.
- Git does not store a separate copy of every file in every commit, but keeps track of changes made in each commit!

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

### What is GitHub?
- Git is not the same as GitHub.
- GitHub makes tools that use Git.
- GitHub is the largest host of source code in the world, and has been owned by Microsoft since 2018.

**Distributed VCS:**
- Local repo: on your computer.
- Remote repo: stored on a server (e.g., GitHub).

---

## Git Setup

### Installing Git
Go to [git-scm.com](https://git-scm.com) and download Git for your operating system.

- **Windows:** Download and run the installer.
Click “Next” to accept the recommended settings.
This will install Git and Git Bash.

- **macOS:** If you use Homebrew, open Terminal and type `brew install git`.
Or, download the .dmg file and drag Git to your Applications folder.

- **Linux:** Open your terminal and use your package manager.
For example, on Ubuntu: `sudo apt-get install git`
After installation, you will be able to use Git from your terminal or command prompt.

### Configuring Git
Use terminal (Mac) or Git Bash (Windows):

### Git Bash
Git Bash is a terminal for Windows that lets you use Git commands.

After installing Git, you can find Git Bash in your Start menu.

You can use Git Bash just like the Command Prompt, but with extra Unix commands (like ls and pwd).

```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

- Use `--global` to set the value for every repository on your computer.
- Use `--local` (the default) to set it only for the current repository.

**Why Configure Git?**
- Git uses your name and email to label your commits.
- If you do not set these, Git will prompt you the first time you try to commit.

**Viewing Your Configuration**
You can see all your Git settings with:

*Example: List All Settings*
  `git config --list`
  `user.name=Your Name`
  `user.email=you@example.com`
  `core.editor=code --wait`
  `alias.st=status`
  `init.defaultbranch=main`

*To view a specific value, use:*
`git config user.name`
OUTPUT: Your Name

**Changing or Unsetting Config Values**
To change a value, just run the git config command again with the new value.

To remove a setting, use --unset:
`git config --global --unset code.editor`

**Default Branch Name**
Set the default branch name for new repositories (for example, main instead of master):
`git config --global init.defaultBranch main`

**Configuration Levels**
There are three levels of configuration:
  - *System* (all users): git config --system
  - *Global* (current user): git config --global
  - *Local* (current repo): git config --local

The order of precedence is:
  - Local (current repo)
  - Global (current user)
  - System (all users)

The reason to use the different levels is that you can set different values for different users or repositories.

This can be used for example to set different default branches for different repositories and users.

**Example: Set a Local Config**
Local settings only apply to the current repository.
`git config user.name "Project Name"`

**Example: Set a Global Config**
Global settings apply to all repositories for the current user.
`git config --global user.name "Global Name"`

**Example: Set a System Config**
System settings apply to all repositories for all users.
`git config --system user.name "System Name"`

...

**Commands to check:**
`ls` - lists the files in the current folder

**Verify Instalation:**
After installing, check that Git works by opening your terminal (or Git Bash on Windows) and running:
`git --version`

- If Git is installed, you will see something like `git version X.Y.Z`

- If you see an error, try closing and reopening your terminal, or check that Git is in your PATH.

**Default Editor**
During installation, Git asks you to pick a default text editor.

This is the program that will open when you need to write messages (like for commits).

**Example: Set VS Code as Default Editor**
`git config --global core.editor "code --wait"`
If you're not sure, just pick the default (Notepad on Windows). You can always change this later.

**Example: Set Notepad as Default Editor**
`git config --global core.editor "notepad"`


**PATH Environment**
Choosing to add Git to your PATH means you can use Git commands in any terminal window.

This is highly recommended for most users to do this during installation.

If you skip this, you'll only be able to use Git in Git Bash (on Windows) or Terminal (on macOS and Linux).

**Example: Check if Git is in PATH**
`git --version`
  - OUTPUT: `git version 2.43.0.windows.1`
If you see an error, you need to add Git to your PATH.


**How to Add Git to PATH after Installation**

- **Windows:**
  - If you missed the option during installation, search for "Environment Variables" in the Start menu and open it.
  - Click "Environment Variables..." and find the "Path" variable under "System variables".
  - Click "Edit", then "New", and add the path to your Git `bin` and `cmd` folders
  (e.g., `C:\Program Files\Git\bin` and `C:\Program Files\Git\cmd)`.
  - Click OK to save. Restart your terminal.

- **macOS:**
  - If you installed with Homebrew, your PATH is usually set automatically.
  - If not, open Terminal and add this line to your `~/.zshrc` or `~/.bash_profile`:
  - `export PATH="/usr/local/bin:$PATH"`
  - Save the file and run `source ~/.zshrc` or `source ~/.bash_profile`.

- **Linux:**
  - Most package managers add Git to PATH automatically.
  - If not, add this line to your `~/.bashrc` or` ~/.profile`:
  - `export PATH="/usr/bin:$PATH"`
  - Save the file and run `source ~/.bashrc` or `source ~/.profile`.

After adding Git to your PATH, open a new terminal window and run `git --version` to check that it works everywhere.

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

### Key Steps to Get Started
  - Create a project folder
  - Navigate to the folder
  - Initialize a Git repository

**Creating Git Folder**
Start by creating a new folder for our project:
Example
  - mkdir myproject
  - cd myproject
*mkdir creates a new directory.*
*cd changes our working directory.*

**Initialize Git**
Now that we are in the correct folder, we can initialize Git on that folder:
Example
`git init ``
OUTPUT: `Initialized empty Git repository in /Users/user/myproject/.git/`

### What is a Repository?
- A Git repository is a folder that Git tracks for changes.
- The repository stores all your project's history and versions.

#### What Happens When You Run git init?
Git creates a hidden folder called .git inside your project.

This is where Git stores all the information it needs to track your files and history.

Example: Show Hidden .git Folder (Linux/macOS)
`ls -a`
.  ..  .git
On Windows, you may need to enable “Show hidden files” in File Explorer to see the .git folder.

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

| Task                             | Command                                      | What it does                          | Example                                        |
| -------------------------------- | -------------------------------------------- | ------------------------------------- | ---------------------------------------------- |
| List local branches              | `git branch`                                 | Shows local branches.                 | `git branch`                                   |
| List remote branches             | `git branch -r`                              | Shows remote-tracking branches.       | `git branch -r`                                |
| List all                         | `git branch -a`                              | Local + remote-tracking.              | `git branch -a`                                |
| Show tracking info               | `git branch -vv`                             | Shows upstream and last commit.       | `git branch -vv`                               |
| Create branch (stay)             | `git branch <name>`                          | Makes a branch, don’t switch.         | `git branch feature/ui`                        |
| Create from point                | `git branch <name> <start>`                  | Makes branch from commit/branch.      | `git branch hotfix abc123`                     |
| Create + switch                  | `git switch -c <name>`                       | Makes branch and switches.            | `git switch -c feature/auth`                   |
| Create tracking from remote      | `git switch -c <name> --track origin/<name>` | Tracks a remote branch.               | `git switch -c feature --track origin/feature` |
| Switch branch                    | `git switch <name>`                          | Moves to branch.                      | `git switch main`                              |
| Switch back                      | `git switch -`                               | Goes to previous branch.              | `git switch -`                                 |
| Legacy switch                    | `git checkout <name>`                        | Old way to switch.                    | `git checkout main`                            |
| Rename current                   | `git branch -m <new>`                        | Renames current branch.               | `git branch -m main`                           |
| Rename any                       | `git branch -m <old> <new>`                  | Renames a given branch.               | `git branch -m dev develop`                    |
| Force rename ⚠️                  | `git branch -M <new>`                        | Renames, overwriting if needed.       | `git branch -M main`                           |
| Delete merged                    | `git branch -d <name>`                       | Deletes if already merged.            | `git branch -d feature/ui`                     |
| Force delete ⚠️                  | `git branch -D <name>`                       | Deletes even if unmerged.             | `git branch -D wip/test`                       |
| Set upstream                     | `git branch -u origin/<remote-branch>`       | Links current to remote.              | `git branch -u origin/main`                    |
| Unset upstream                   | `git branch --unset-upstream`                | Removes tracking link.                | `git branch --unset-upstream`                  |
| See branches that contain commit | `git branch --contains <commit>`             | Lists branches with that commit.      | `git branch --contains abc123`                 |
| Show merged                      | `git branch --merged`                        | Branches already merged into current. | `git branch --merged`                          |
| Show unmerged                    | `git branch --no-merged`                     | Branches not merged into current.     | `git branch --no-merged`                       |


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

---

