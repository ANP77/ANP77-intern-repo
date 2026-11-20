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

# Writing Meaningful Commit Messages Reflection

## What makes a good commit message?
I think a good commit message should be clear, concise, and descriptive enough for someone to understand what changes were made without having to look through the code. It should explain the purpose of the changes without including unnecessary details. Using a consistent format, such as prefixes like docs: or fix:, can also make the commit history easier to read and understand.

## How does a clear commit message help in team collaboration?
Clear commit messages help team members understand what changes have been made to a project and why. When multiple developers are working on the same codebase, meaningful commit messages make it easier to track progress, review changes, and identify when certain features or bug fixes were introduced. They also help developers understand each other's work without having to ask for explanations every time.

## How can poor commit messages cause issues later?
Poor commit messages can make it difficult to understand what was changed or why a particular change was made. For example, vague messages such as "small fix" don't provide much useful information. This can become frustrating when developers need to look back through the commit history to identify bugs, review previous changes, or understand how a feature was implemented. Overly detailed messages can also make the history harder to read, especially when the important information is buried in unnecessary explanations.