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

# Pull Requests Reflection

## Why are PRs important in a team workflow?
Pull Requests are important because they allow developers to review and discuss changes before merging them into the main codebase. When multiple developers are working on the same project, PRs help identify potential bugs, suggest improvements, and ensure that the changes meet the project's requirements. They also make it easier to track changes and understand why certain decisions were made.

## What makes a well-structured PR?
I think a well-structured PR should have a clear and descriptive title that explains the purpose of the changes. It should also include a description of what was changed, why the changes were made, and any related issues. Keeping the changes focused on a specific task makes the PR easier to review and understand.

## What did you learn from reviewing an open-source PR?
Although I already have experience creating PRs, merging changes, and deleting branches from my university projects, reviewing an open-source PR helped me better understand how code reviews work in larger development teams. I learned how developers discuss changes, provide feedback, and suggest improvements before approving a PR. It also showed me the importance of clear communication and collaboration when working on a shared codebase.

# Understand git bisect Reflection

## What does git bisect do?
git bisect is a Git command that helps developers identify which commit introduced a bug. It uses a binary search process to narrow down the commit history by comparing working and broken versions of the project. Developers mark commits as good or bad based on whether the issue exists until Git identifies the first bad commit. In my experiment, I used git bisect to identify the commit where I intentionally changed the addition operation to subtraction in a simple calculator.

## When would you use it in a real-world debugging situation?
I would use git bisect when a feature that previously worked suddenly stops working, but I'm not sure which change caused the problem. This can be especially useful when multiple developers have made several commits to the project. By identifying a known working commit and a broken commit, I can use git bisect to narrow down where the issue was introduced and investigate the changes made in that commit.

## How does it compare to manually reviewing commits?
Manually reviewing commits can take a lot of time, especially when there are many commits. git bisect is more efficient because it uses binary search to eliminate large portions of the commit history with each test, rather than checking every commit individually. However, developers still need to test the selected commits and investigate the identified changes to understand and fix the actual problem.