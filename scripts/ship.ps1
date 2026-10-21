param(
  [Parameter(Mandatory = $true)][string]$Message,
  [string]$Type = 'feat'
)

$ErrorActionPreference = 'Stop'

$slug = ($Message.ToLower() -replace '[^a-z0-9]+', '-').Trim('-')
if ($slug.Length -gt 40) { $slug = $slug.Substring(0, 40).Trim('-') }
$branch = "$Type/$slug"

git fetch origin
git switch -c $branch origin/main
npm.cmd run format
git add .
git commit -m $Message
git push -u origin $branch

if (Get-Command gh -ErrorAction SilentlyContinue) {
  gh pr create --fill --base main
  gh pr merge --auto --squash --delete-branch
} else {
  Write-Host "GitHub CLI not found. Open the repo on GitHub and click 'Compare & pull request' for $branch."
}

Write-Host ''
Write-Host 'Pushed. Once the PR has merged, sync with:  git switch main ; git pull origin main'
