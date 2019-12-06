# Fast-Forward

Fast-Forward

当前分支合并到另一分支时，如果没有分歧解决，就会直接移动文件指针。这个过程叫做 fastforward。

开发一直在 master 分支进行，但忽然有一个新的想法，于是新建了一个develop的分支，并在其上进行一系列提交，完成时，回到 master分支，此时，master分支在创建develop分支之后并未产生任何新的commit。此时的合并就叫 fast forward。

如果执行了 Fast Forward，开发者根本不会看到这个分支，就像在 master 直接 commit 一样。

示例：

1. 新建一个work tree，在master中做几次commit
2. 新建develop的branch，然后再做多次commits

此时的分支流图如下(gitx)：

正常合并

(master)$ git merge develop 
Updating 5999848..7355122
Fast-forward
c.txt |    1 +
d.txt |    1 +
2 files changed, 2 insertions(+), 0 deletions(-)
create mode 100644 c.txt
create mode 100644 d.txt

可以看出这是一次fast-forward式的合并，且合并完之后的视图为扁平状，看不出develop分支开发的任何信息。

使用–no-ff进行合并

—no-ff (no fast foward)，使得每一次的合并都创建一个新的commit记录。即使这个commit只是fast-foward，用来避免丢失信息。

(master)$ git merge –no-ff develop
Merge made by recursive.
c.txt | 2 +-
d.txt | 2 +-
2 files changed, 2 insertions(+), 2 deletions(-)

可以看出，使用no-ff后，会多生成一个commit 记录，并强制保留develop分支的开发记录（而fast-forward的话则是直接合并，看不出之前Branch的任何记录）。这对于以后代码进行分析特别有用，故有以下最佳实践。

–no-ff，其作用是：要求git merge即使在fast forward条件下也要产生一个新的merge commit。此处，要求采用–no-ff的方式进行分支合并，其目的在于，希望保持原有“develop branches”整个提交链的完整性。Git – Fast Forward 和 no fast foward
