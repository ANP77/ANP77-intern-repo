# Git Concepts: Staging vs. Committing Reflection

## What is the difference between staging and committing?
Staging is when we select the changes we want to include in our next commit using git add. Committing is when we record the staged changes in the local Git repository's history using git commit. Staging is temporary, as we can still modify or unstage changes, whereas committing creates a saved snapshot of those changes in the project's history.

## Why does Git separate these two steps?
Separating these two steps gives developers more control over which changes they want to save together. Instead of committing every modified file at once, we can choose specific files or changes to include in each commit. Bug fixes and improvements can be committed separately. This makes it easier to organise changes, keep commits focused, and track what has been modified throughout a project.

## When would you want to stage changes without committing?
I would stage changes without committing when I am still working on a task and want to prepare certain changes for my next commit. If I have modified multiple files, I might want to stage only the files related to a particular feature while continuing to work on the others. This allows me to review what I am about to commit and make sure I am only including the relevant changes.