#!/bin/bash

# 设置源文件
src_file="content/content1.md"

# 循环创建新的文件
for i in {2..100}
do
  cp "$src_file" "content/content$i.md"
done

echo "已成功生成！"