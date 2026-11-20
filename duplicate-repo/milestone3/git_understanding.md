# Git Concepts: Staging vs. Committing Reflection

## What is the difference between staging and committing?
Staging is when we select the changes we want to include in our next commit using git add. Committing is when we record the staged changes in the local Git repository's history using git commit. Staging is temporary, as we can still modify or unstage changes, whereas committing creates a saved snapshot of those changes in the project's history.

## Why does Git separate these two steps?
Separating these two steps gives developers more control over which changes they want to save together. Instead of committing every modified file at once, we can choose specific files or changes to include in each commit. Bug fixes and improvements can be committed separately. This makes it easier to organise changes, keep commits focused, and track what has been modified throughout a project.

## When would you want to stage changes without committing?
I would stage changes without committing when I am still working on a task and want to prepare certain changes for my next commit. If I have modified multiple files, I might want to stage only the files related to a particular feature while continuing to work on the others. This allows me to review what I am about to commit and make sure I am only including the relevant changes.

# Branching & Team Collaboration Reflection

## Why is pushing directly to main problematic?
main is usually the shared, stable version of the project. When several developers push changes directly without testing or reviewing them, they might introduce bugs, errors, and conflicts that affect the entire team. It can also become difficult to manage changes when multiple developers are working on the same project.

## How do branches help with reviewing code?
Branches allow developers to work on new features, bug fixes, or improvements separately without affecting the main codebase. Once the changes are ready, developers can create a pull request for other team members to review the code before merging it into main. This allows the team to provide feedback, suggest improvements, and identify potential issues before the changes become part of the main project.

## What happens if two people edit the same file on different branches?
If two people edit the same file on different branches, Git keeps their changes separate until the branches are merged. If they modify different parts of the file, Git can usually merge the changes automatically. However, if they modify the same lines or make conflicting changes, a merge conflict may occur. In that case, developers need to review the conflicting changes and manually resolve them before completing the merge.