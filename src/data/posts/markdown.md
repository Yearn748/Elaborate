---
title: Markdown Example
date: 2025-3-20
description: A simple example of a Markdown blog post.
category: Examples
tags: [Markdown, Blogging, Demo]
top: 1
draft: false
image: /test.jpg
---

# 一级标题

段落之间空行分隔

第二段 _斜体_, **粗体**, `等宽字体`

列表项

-   1
-   2
-   3

> 块引用
> 这样写
>
> 可以跨越多行

---

三个-表示分割线

支持 Unicode ☺

## 二级标题

数字列表:

1. 1
2. 2
3. 3

再次注意文本实际从第 4 列开始。代码示例：

    for i in 1 .. 10 { do-something(i) }

代码块

```
define foobar() {
    print "Welcome to flavor country!";
}
```

标记语言可以有代码高亮

```python
import time
for i in range(10):
    time.sleep(0.5)
    print i
```

### 三级标题

嵌套列表

1.  First:

    -   1
    -   2
    -   3

2.  second

3.  third

        code...

链接示例 [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [三级标题](#三级标题). 脚注 [^1].

[^1]: 脚注内容

表格

| size | material | color       |
| ---- | -------- | ----------- |
| 9    | leather  | brown       |
| 10   | hemp     | canvas      |
| 11   | glass    | transparent |

左对齐（默认）

| size | material | color |
| :--- | :------- | :---- |
| 9    | leather  | brown |

居中对齐

| size | material | color  |
| :--: | :------: | :----: |
|  10  |   hemp   | canvas |

右对齐

| size | material |       color |
| ---: | -------: | ----------: |
|   11 |    glass | transparent |

插入图片

![example](./assets/banner.jpg)

内联数学公式: $\omega = d\phi / dt$.

独立公式

$$I = \int \rho R^{2} dV$$

公式块

$$
\begin{equation*}
\pi
=3.1415926535
 \;8979323846\;2643383279\;5028841971\;6939937510\;5820974944
 \;5923078164\;0628620899\;8628034825\;3421170679\;\ldots
\end{equation*}
$$
